// You are given an array of objects representing orders placed at an online store. 
// Each order contains a customer name, items array (with item names and prices), 
// and a status (whether the order was "delivered" or "pending").

// Summarize the total amount spend by each customer who has at least one delivered order
// Check if any customer has placed a pending order
// Log a list of customers who have both delivered and pending orders

const orders = [
  { customer: 'Alice', items: [{ name: 'Laptop', price: 1200 }], status: 'delivered' },
  { customer: 'Alice', items: [{ name: 'Headphones', price: 100 }], status: 'pending' },
  { customer: 'Bob', items: [{ name: 'Phone', price: 800 }], status: 'delivered' },
  { customer: 'Bob', items: [{ name: 'Tablet', price: 300 }], status: 'delivered' },
  { customer: 'Charlie', items: [{ name: 'Monitor', price: 200 }], status: 'pending' },
  { customer: 'Charlie', items: [{ name: 'Keyboard', price: 50 }], status: 'delivered' },
];

// Summarize delivered order totals
const deliveredCostsPerCustomer = orders.filter((d) => d.status === 'delivered').reduce((acc, obj) => {
  const { customer, items } = obj;
  const { price } = items[0];

  if (!acc[customer]) {
    acc[customer] = price
  } else {
    acc[customer] += price;
  };

  return acc;
}, {})

const hasPendingOrders = orders.some((o) => o.status === 'pending');

const allOrderStatusesPerCustomer = orders.reduce((acc, obj) => {
  const { customer, status } = obj

  if (!acc[customer]) {
    acc[customer] = [status];
  } else {
    acc[customer].push(status)
  }

  return acc;
}, {})

const customersWithBothStatuses = [];

for (const [key, value] of Object.entries(allOrderStatusesPerCustomer)) {
  const hasPendingOrders = value.some((o) => o === 'pending');
  const hasDeliveredOrders = value.some((o) => o === 'delivered');

  if (hasPendingOrders && hasDeliveredOrders) {
    customersWithBothStatuses.push(key);
  }
}

console.log({customersWithBothStatuses})