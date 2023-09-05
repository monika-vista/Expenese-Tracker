import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseDestructure({ expense, onchange, ondelete }) {
  let id = expense.id;
  let title = expense.title;
  let amount = expense.amount;
  let date = expense.date;
  const [isEditing, setIsEditing] = useState(false);
  let ExpenseItemContent;
  if (isEditing) {
    ExpenseItemContent = (
      <div className="expense-item__description">
        <input
          type="text"
          placeholder={title}
          onChange={(e) => onchange({ ...expense, title: e.target.value })}
        />
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="expense-item__price"
          placeholder={amount}
          onChange={(e) => onchange({ ...expense, amount: e.target.value })}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </div>
    );
  } else {
    ExpenseItemContent = (
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      {ExpenseItemContent}
      <button onClick={() => ondelete(id)}>Delete</button>
    </div>
  );
}

export default ExpenseDestructure;
