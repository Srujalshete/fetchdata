import React from 'react';

const BarChart = ({ data }) => {
  const monthlySales = {};

  data.forEach((item) => {
    const month = new Date(item.date_of_sale).toLocaleString('default', { month: 'long' });
    if (item.sold) {
      monthlySales[month] = (monthlySales[month] || 0) + item.price;
    }
  });

  return (
    <div>
      <h2>Bar Chart</h2>
      {Object.entries(monthlySales).map(([month, sales]) => (
        <div key={month}>
          <strong>{month}</strong>: ₹{sales}
        </div>
      ))}
    </div>
  );
};

export default BarChart;
