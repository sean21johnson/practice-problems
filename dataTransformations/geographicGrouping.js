const input = [
  { country: 'USA', state: 'California', city: 'Los Angeles', orderDetails: { orderId: 1, totalAmount: 500 } },
  { country: 'USA', state: 'California', city: 'San Francisco', orderDetails: { orderId: 2, totalAmount: 300 } },
  { country: 'USA', state: 'Texas', city: 'Houston', orderDetails: { orderId: 3, totalAmount: 700 } },
  { country: 'Canada', state: 'Ontario', city: 'Toronto', orderDetails: { orderId: 4, totalAmount: 450 } },
  { country: 'Canada', state: 'British Columbia', city: 'Vancouver', orderDetails: { orderId: 5, totalAmount: 350 } },
  { country: 'USA', state: 'Texas', city: 'Austin', orderDetails: { orderId: 6, totalAmount: 200 } },
  { country: 'Canada', state: 'Ontario', city: 'Ottawa', orderDetails: { orderId: 7, totalAmount: 250 } },
];

const output = [
  {
    country: 'USA',
    states: [
      {
        state: 'California',
        cities: [
          {
            city: 'Los Angeles',
            orders: [
              { orderId: 1, totalAmount: 500 }
            ]
          },
          {
            city: 'San Francisco',
            orders: [
              { orderId: 2, totalAmount: 300 }
            ]
          }
        ]
      },
      {
        state: 'Texas',
        cities: [
          {
            city: 'Houston',
            orders: [
              { orderId: 3, totalAmount: 700 }
            ]
          },
          {
            city: 'Austin',
            orders: [
              { orderId: 6, totalAmount: 200 }
            ]
          }
        ]
      }
    ]
  },
  {
    country: 'Canada',
    states: [
      {
        state: 'Ontario',
        cities: [
          {
            city: 'Toronto',
            orders: [
              { orderId: 4, totalAmount: 450 }
            ]
          },
          {
            city: 'Ottawa',
            orders: [
              { orderId: 7, totalAmount: 250 }
            ]
          }
        ]
      },
      {
        state: 'British Columbia',
        cities: [
          {
            city: 'Vancouver',
            orders: [
              { orderId: 5, totalAmount: 350 }
            ]
          }
        ]
      }
    ]
  }
];

// {
//   country: 'USA',
//   state: 'California',
//   city: 'Los Angeles',
//   orderDetails: { orderId: 1, totalAmount: 500 }
// }


// You are given an array of objects representing orders, each containing information 
// about the country, state, city, and order details. Your task is to write a function that groups these orders by country, then by state, and then by city.

// Solution
// First group them by country

const orders = input.reduce((acc, obj) => {
  const { country, state, city, orderDetails } = obj;

  // Find or create the country group
  let countryGroup = acc.find((group) => group.country === country);
  if (!countryGroup) {
    countryGroup = { country, states: [] };
    acc.push(countryGroup);
  }

  // Find or create the state group within the country
  let stateGroup = countryGroup.states.find((s) => s.state === state);
  if (!stateGroup) {
    stateGroup = { state, cities: [] };
    countryGroup.states.push(stateGroup);
  }

  // Find or create the city group within the state
  let cityGroup = stateGroup.cities.find((c) => c.city === city);
  if (!cityGroup) {
    cityGroup = { city, orders: [] };
    stateGroup.cities.push(cityGroup);
  }

  // Add the order to the city's orders array
  cityGroup.orders.push(orderDetails);

  return acc;
}, []);


console.log(JSON.stringify(orders, null, 2))