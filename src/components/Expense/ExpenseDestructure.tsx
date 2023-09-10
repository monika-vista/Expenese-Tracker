import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import { expenseObj } from "../NewExpense/ExpenseForm";
interface Props {
  expense: expenseObj;
  onchange: (expense: expenseObj) => void;
  ondelete: (id: string) => void;
}
const ExpenseDestructure: React.FC<Props> = (props) => {
  let { id, title, amount, date } = props.expense;
  const [isEditing, setIsEditing] = useState(false);
  let ExpenseItemContent;
  if (isEditing) {
    ExpenseItemContent = (
      <div className="expense-item__description">
        <input
          type="date" className="expense-item__description"
          onChange={(e) =>
            props.onchange({ ...props.expense, date: e.target.valueAsDate! })
          }
        />
        <input
          type="text"
          placeholder={title}
          onChange={(e) =>
            props.onchange({ ...props.expense, title: e.target.value })
          }
        />
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="expense-item__price"
          placeholder={amount.toString()}
          onChange={(e) =>
            props.onchange({ ...props.expense, amount: e.target.valueAsNumber })
          }
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
      <button
        onClick={() => {
          props.ondelete(id);
          setIsEditing((isEditing) =>
            isEditing === true ? !isEditing : isEditing
          );
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseDestructure;
