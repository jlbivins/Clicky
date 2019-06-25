import React from "react";
import "./button.css";

const Button = props => (
  <button className="btn btn-info position" id={props.id} onClick={()=>props.click(props.id)}>{props.buttonName}</button>
);

export default Button;

