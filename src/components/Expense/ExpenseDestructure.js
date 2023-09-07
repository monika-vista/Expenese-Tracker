import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseDestructure({ expense, onchange, ondelete }) {
  let {id,title,amount,date}= expense;
  const [isEditing, setIsEditing] = useState(false);
  let ExpenseItemContent;
  if (isEditing) {
    ExpenseItemContent = (
      <div className="expense-item__description">
        <input type="date" placeholder={date} onChange={(e) => onchange({ ...expense, date: e.target.valueAsDate })} />
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
          onChange={(e) => onchange({ ...expense, amount: e.target.valueAsNumber })}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </div>
    );
  } else {
    ExpenseItemContent = (
      <div className="expense-item__description">
        <ExpenseDate date={date} />
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <div className="expense-item">
      {ExpenseItemContent}
      <button onClick={() => {ondelete(id); setIsEditing(isEditing=>isEditing===true?!isEditing:isEditing)}}>Delete</button>
    </div>
  );
}

export default ExpenseDestructure;
