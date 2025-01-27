import React from 'react';

const DropDown = ({ months, selectedMonth, setSelectedMonth }) => {
  return (
    <select
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)}
    >
      {months.map((month, index) => (
        <option key={index} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
