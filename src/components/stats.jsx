import React from 'react';

const Stats = ({ data }) => {
  const totalItems = data.length;
  const soldItems = data.filter((item) => item.sold).length;
  const unsoldItems = totalItems - soldItems;
  const totalSales = data.reduce((sum, item) => (item.sold ? sum + item.price : sum), 0);

  return (
    <div>
      <h2>Stats</h2>
      <p>Total Items: {totalItems}</p>
      <p>Sold Items: {soldItems}</p>
      <p>Unsold Items: {unsoldItems}</p>
      <p>Total Sales: ₹{totalSales}</p>
    </div>
  );
};

export default Stats;
