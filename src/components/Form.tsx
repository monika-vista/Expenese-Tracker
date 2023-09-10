// import { useState } from "react";
// import "./App.css";

// function Form() {
//     const [expenses, setExpenses] = useState({});
//     function saveData(e) {
//         e.preventDefault();
//         let cost = document.querySelector(".cost").value;
//         console.log(cost)
//         let details = document.querySelector(".details").value;
//         let date = document.querySelector(".date").value;

//         let expense = {
//             cost: cost,
//             details: details,
//             date: date,
//         };
//         setExpenses({ ...expenses, expense });
//         console.log(expenses);
//     }
//     //date, rate, detail
//     return (
//         <form>
//             <label className="Details">Details</label>
//             <input className="details" type="text" />
//             <label htmlFor="Date">Date</label>
//             <input className="date" type="date" />
//             <label htmlFor="Cost">Cost</label>
//             <input className="cost" type="Number" />
//             <button className="submit" type="submit" onClick={saveData}>
//                 Add Expense
//             </button>
//         </form>
//     );
// }

// export default Form;
