import React from "react";
import "./nav.css";


function Nav (props){
  return( <nav className="navbar"><h1>This is my nav bar.   Score: {props.score}</h1></nav>)
}

export default Nav;


