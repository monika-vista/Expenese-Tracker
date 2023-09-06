import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function onSubmitGetDataFromChild(prevData) {
    let newData = {
      ...prevData,
      id: Math.random().toString(),
    };
    props.passDataToApp(newData);
  }
  const [status, setStatus] = useState(false);

  const setClickStatus=(event)=>{
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
