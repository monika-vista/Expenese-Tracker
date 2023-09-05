
import React, { useState } from "react";

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

// const Home = (props) => {
//   return (
//     <Card className={classes.home}>
//       <h1>Welcome back!</h1>
//     </Card>
//   );
// };


import "./Home.module.css";
import NewExpense from "../NewExpense/NewExpense";
import Expenses from "../Expense/Expenses";


function Home() {
  const expenseList = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, addExpense] = useState(expenseList);


  const getData = (prevData) => {
    addExpense((expenses) => [prevData, ...expenses]);
  };
  

  return (
    <div className="App">
      <NewExpense passDataToApp={getData} />
      <Expenses expense={expenses} />
    </div>
  );
}

// export default App;

export default Home;

