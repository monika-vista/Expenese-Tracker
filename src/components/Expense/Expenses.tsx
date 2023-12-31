import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import React, { useEffect, useState, useReducer } from "react";
import ExpensesChart from "./ExpensesChart";
type expenseObj={
  id:string,
  title:string,
  amount:number,
  date: Date;
}
interface Action {
  type:string;
  exp?:expenseObj;
  id?:string;
}

function taskreducer(allExpense:expenseObj[], action:Action):expenseObj[] {
  switch (action.type) {
    case 'add': {
      return ([...allExpense, action.exp!])
    }
    case 'edit': {
      return (allExpense.map((exp) => {
        if (exp.id === action.exp!.id) {
          return action.exp!;
        } else {
          return exp;
        }
      }));
    }
    case 'delete': {
      return allExpense.filter((exp) => exp.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
interface Props {
  expense:expenseObj[],
  newData:expenseObj,
}
const Expenses:React.FC<Props>= (props) => {
  const [filteredExpense, setFilteredExpense] = useState<expenseObj[]>([]);
  const [date, setSelectedDate] = useState('');
  const [allExpense, dispatch] = useReducer(taskreducer, props.expense);
  const [lengthE, setLength] = useState(allExpense.length);

  const getFilteredDate = (selectedDate:string) => {
    setSelectedDate(selectedDate);
    let arr = allExpense.filter(
      (key) => key.date.getFullYear().toString() === selectedDate
    );
    if (selectedDate === "all") {
      arr = allExpense;
    }
    setFilteredExpense(arr);
  };

  //useEffect to run only at the start of the application
  // useEffect(()=>{
  //   console.log(`hey`)
  //   getFilteredDate('all');
  // },[])

  //useEffect to re-render the component immediately as new expense is added.

  useEffect(() => {
    getFilteredDate(date);
  }, [allExpense]);

  const handleChange = (expense:expenseObj) => {
    dispatch({
      type: 'edit',
      exp: expense
    })
  }

  if (lengthE !== props.expense.length) {
    console.log(`${lengthE} ${props.expense.length} ${allExpense.length}`)
    dispatch({
      type: 'add',
      exp: props.newData
    })
    setLength(props.expense.length);
  }

  const handleDelete = (id:string) => {
    //console.log(`${allExpense} now ${id}`)
    dispatch({
      type: 'delete',
      id: id
    })
  }

  // console.log(`this is the last array I directly received after updating `)
  let filterData;
  if (date) {
    filterData = (
      <>
        <ExpensesChart expense={filteredExpense} />
        <ExpenseItem arr={filteredExpense} onchange={handleChange} ondelete={handleDelete} />
      </>
    )
  } else {
    filterData = (
      <>
        <ExpensesChart expense={allExpense} />
        <ExpenseItem arr={allExpense} onchange={handleChange} ondelete={handleDelete} />
      </>
    )
  }

  return (
    <div>
      <ExpenseFilter getFilteredDate={getFilteredDate} />
      {filterData}</div>
  );
};
export default Expenses;
