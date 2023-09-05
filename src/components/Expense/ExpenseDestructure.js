import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseDestructure({id,title,amount,date}){

    // let id = expense.id;
    // let title=expense.title;
    // let amount=expense.amount;
    // let date =expense.date;
    return(
    <div className="expense-item">
          <ExpenseDate date={date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{amount}</div>
          </div>
    </div>);

}

export default ExpenseDestructure;