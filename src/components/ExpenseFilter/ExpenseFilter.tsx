import React from 'react';

import './ExpenseFilter.css';
interface Props{
  getFilteredDate:(date:string)=>void;
}
const ExpensesFilter:React.FC<Props> = (props) => {

  const passDate=(event:React.ChangeEvent<HTMLSelectElement>)=>{
    return props.getFilteredDate(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={passDate} >
          <option value='all'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;