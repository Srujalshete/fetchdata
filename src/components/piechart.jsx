import React from 'react';

const PieChart = ({ data }) => {
  const categoryCounts = {};

  data.forEach((item) => {
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  });

  return (
    <div>
      <h2>Pie Chart</h2>
      {Object.entries(categoryCounts).map(([category, count]) => (
        <div key={category}>
          <strong>{category}</strong>: {count} items
        </div>
      ))}
    </div>
  );
};

export default PieChart;
