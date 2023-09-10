import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { expenseObj } from "./ExpenseForm";
interface Props{
  passDataToApp:(newData:expenseObj)=>void
}
const NewExpense:React.FC<Props>=(props) =>{
  function onSubmitGetDataFromChild(prevData:expenseObj) {
    let newData = {
      ...prevData,
      id: Math.random().toString(),
    };
    props.passDataToApp(newData);
  }
  const [status, setStatus] = useState(false);

  const setClickStatus=()=>{
    setStatus(status=>!status)
}
  let newButton=<button onClick={setClickStatus}>Add new expense</button>
  if(status){
   newButton =
    <ExpenseForm onSubmitDataLoad={onSubmitGetDataFromChild} onBoxChange={setClickStatus}/>}

  return (
    <div className="new-expense">
      {newButton}
    </div>
  );
}

export default NewExpense;
