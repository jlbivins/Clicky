import React from "react";
import "./button.css";

// const Button = props => (
//   <button className="btn btn-info position" id={props.id} onClick={()=>props.click(props.id)}>{props.buttonName}</button>
// );
// const Button = props => (
// <img src="smiley.gif" alt="Smiley face" height="42" width="42" id={props.id} onClick={()=>props.click(props.id)}>{props.buttonName}</img>
// );

const Button = props => (
 
// <img className="card-img-top card-height" src={props.image} alt="" />
    <img className="card" src={props.image} alt="" onClick={()=>props.click(props.id, props.pokemon)} />
);
// const Button = props => (
//   <div className="card" onClick={e => props.clickEvent(e.target.src)}>
//     <img className="card-img-top card-height" src={props.image} alt="" />
//   </div>
// );
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqWsUKB4btZDj43Tk_ohcQZsfyrRIOc7ciFQykFaA0CvUDSAM
export default Button;

