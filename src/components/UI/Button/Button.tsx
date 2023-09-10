import React from "react";
import classes from "./Button.module.css";
interface Props {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  onclick: () => void;
  disabled: boolean;
}
const Button: React.FC<Props> = (props) => {
  return (
    <button
      type={props.type! || "button"!}
      className={`${classes.button} ${props.className}`}
      onClick={props.onclick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
