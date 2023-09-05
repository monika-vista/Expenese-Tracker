import ExpenseDestructure from "./ExpenseDestructure";
import "./ExpenseItem.css";
import Card from "../UI/Card/Card";

function ExpenseItem(props) {

  return (
    <Card>
      {
      props.arr.map((exp) => {
        return (
          <Card>
            <ExpenseDestructure expense={exp} onchange={props.onchange} ondelete={props.ondelete}/>
          </Card>
        );
      })}
    </Card>
  );
}

export default ExpenseItem;

//alternatives to set props
// you can directly destructure props in the arguments itself, ({date,title,amount})
// then directly access inside your component with above variable names.

//children is the reserved keyword and all the props has children attribute in-built even though if you don't mention it.
// props.children constain the contain between the wrapper of the custom component
//<example- Card-customComponent
//<card><div><h2><EXPSENSE>.....</card>
