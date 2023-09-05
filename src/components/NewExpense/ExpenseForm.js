import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: title,
      date: new Date(date),
      amount: +amount,
    };
    props.onSubmitDataLoad(expense);
    props.onBoxChange();
    setTitle("");
    setDate("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} required/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler} required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} value={date} required/>
        </div>
        <div className="new-expense__control">
          <label>Submit</label>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
