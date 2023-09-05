import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import React, { useEffect, useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredExpense, setFilteredExpense] = useState(props.expense);
  const [date,setSelectedDate]=useState('all');
  const [lengthE, setLength] =useState(props.expense.length);

  const getFilteredDate = (selectedDate) => {
    setSelectedDate(selectedDate);
    let arr = props.expense.filter(
      (key) => key.date.getFullYear().toString() === selectedDate
    );
    if (selectedDate === "all") {
      arr = props.expense;
    }
    setFilteredExpense(arr);
};

if(lengthE!==props.expense.length){
  setLength(props.expense.length);
}

useEffect(() => {
  getFilteredDate(date) }, [lengthE]);

return (
  <div>
    <ExpenseFilter getFilteredDate={getFilteredDate} />
    <ExpensesChart expense={filteredExpense} />
    <ExpenseItem arr={filteredExpense} />
  </div>
);
}
export default Expenses;

