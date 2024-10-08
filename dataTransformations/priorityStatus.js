const input = [
  { name: "Task 1", status: "Open", priority: "High", date: "2023-08-15" },
  {
    name: "Task 2",
    status: "In Progress",
    priority: "Low",
    date: "2023-07-14",
  },
  { name: "Task 3", status: "Open", priority: "Medium", date: "2022-09-22" },
  { name: "Task 4", status: "Open", priority: "High", date: "2023-08-14" },
  {
    name: "Task 5",
    status: "In Progress",
    priority: "Low",
    date: "2023-07-14",
  },
  { name: "Task 6", status: "Closed", priority: "High", date: "2023-06-25" },
];

const output = [
  {
    status: "Open",
    priorities: [
      {
        priority: "High",
        dates: [
          {
            year: "2023",
            months: [
              {
                month: "08",
                tasks: [{ name: "Task 1" }, { name: "Task 4" }],
              },
            ],
          },
        ],
      },
      {
        priority: "Medium",
        dates: [
          {
            year: "2022",
            months: [
              {
                month: "09",
                tasks: [{ name: "Task 3" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    status: "In Progress",
    priorities: [
      {
        priority: "Low",
        dates: [
          {
            year: "2023",
            months: [
              {
                month: "07",
                tasks: [{ name: "Task 2" }, { name: "Task 5" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    status: "Closed",
    priorities: [
      {
        priority: "High",
        dates: [
          {
            year: "2023",
            months: [
              {
                month: "06",
                tasks: [{ name: "Task 6" }],
              },
            ],
          },
        ],
      },
    ],
  },
];

/*
  -Group by status, then by priority, then by year, and then by month

  -Each object looks like this
    { name: "Task 1", status: "Open", priority: "High", date: "2023-08-15" },
*/

const result = input.reduce((acc, item) => {
  const { name, status, priority, date } = item;
  const [year, month] = date.split("-");

  // Create a status group
  let statusGroup = acc.find((d) => d.status === status);
  if (!statusGroup) {
    statusGroup = {
      status: status,
      priorities: [],
    };
    acc.push(statusGroup);
  }

  let priorityGroup = statusGroup.priorities.find(
    (d) => d.priority === priority
  );
  if (!priorityGroup) {
    priorityGroup = {
      priority: priority,
      dates: [],
    };
    statusGroup.priorities.push(priorityGroup);
  }

  let yearGroup = priorityGroup.dates.find((d) => d.year === year);
  if (!yearGroup) {
    yearGroup = {
      year: year,
      months: [],
    };
    priorityGroup.dates.push(yearGroup);
  }

  let monthGroup = yearGroup.months.find((d) => d.month === month);
  if (!monthGroup) {
    monthGroup = {
      month: month,
      tasks: [],
    };
    yearGroup.months.push(monthGroup);
  }

  monthGroup.tasks.push({
    name: name,
  });

  return acc;
}, []);

console.log(JSON.stringify(result, null, 2));
