import React, { useState, useEffect } from 'react';
import './style.css';
import DropDown from './components/dropdowns.jsx';
import Stats from './components/stats.jsx';
import PieChart from './components/piechart.jsx';
import BarChart from './components/barchart.jsx';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('All');

  useEffect(() => {
    axios
      .get(
        'https://roxiler-interviews.s3.amazonaws.com/product_transaction.json'
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  const filteredData =
    selectedMonth === 'All'
      ? data
      : data.filter(
          (item) =>
            new Date(item.dateOfSale).getMonth() ===
            new Date(`1 ${selectedMonth} 2000`).getMonth()
        );

  return (
    <div>
      <h1>Dashboard</h1>
      <DropDown
        key="months-dropdown"
        months={[
          'All',
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ]}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <Stats data={filteredData} />
      <BarChart data={filteredData} />
      <PieChart data={filteredData} />
    </div>
  );
};

export default App;
