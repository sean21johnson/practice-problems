// Given an array of objects representing events with a date, 
// write a function that groups these events by year, then by month, 
// and then by day. Each event object has the following structure:

const input = [
  { name: 'Event 1', date: '2023-08-15' },
  { name: 'Event 2', date: '2023-08-15' },
  { name: 'Event 3', date: '2023-07-12' },
  { name: 'Event 4', date: '2022-06-20' },
  { name: 'Event 5', date: '2023-07-12' },
  { name: 'Event 6', date: '2022-06-19' }
];

const output = [
  {
    year: '2023',
    months: [
      {
        month: '08',
        days: [
          {
            day: '15',
            events: [
              { name: 'Event 1' },
              { name: 'Event 2' }
            ]
          }
        ]
      },
      {
        month: '07',
        days: [
          {
            day: '12',
            events: [
              { name: 'Event 3' },
              { name: 'Event 5' }
            ]
          }
        ]
      }
    ]
  },
  {
    year: '2022',
    months: [
      {
        month: '06',
        days: [
          {
            day: '20',
            events: [
              { name: 'Event 4' }
            ]
          },
          {
            day: '19',
            events: [
              { name: 'Event 6' }
            ]
          }
        ]
      }
    ]
  }
];

const groupings = input.reduce((acc, obj, index, original) => {
  let annualGroup;

  const [year, month, day] = obj.date.split('-');
  
  // If the year is not in the accumulator, set annualGroup to an object with year and an empty months array
  if (!acc.find((d) => d.year === year)) {
    annualGroup = {
      year,
      months: [],
    };
    acc.push(annualGroup);
  } else {
    annualGroup = acc.find((d) => d.year === year);
  }

  // Find the unique months for that year
  let monthGroup = annualGroup.months.find((c) => c.month === month);
  if (!monthGroup) {
    monthGroup = {
      month,
      days: []
    };
    annualGroup.months.push(monthGroup);
  }

  // Now handle the days inside the month
  let dayGroup = monthGroup.days.find((d) => d.day === day);
  if (!dayGroup) {
    dayGroup = {
      day,
      events: []
    };
    monthGroup.days.push(dayGroup);
  }

  // Add the event to the day's events
  dayGroup.events.push({
    name: obj.name
  });

  return acc;
}, []);

console.log(JSON.stringify(groupings, null, 2));