import React from 'react';

import classes from './Card.module.css';
interface Props{
  className?: string |undefined;
  children?: React.ReactNode;
}

const Card:React.FC<Props>= (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
