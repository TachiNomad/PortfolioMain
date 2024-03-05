import React from "react";
import "./style.css";

function Projectss(props) {
  return (
    <div className="projectfiles">
      <div>
             {props.name} <a>Info: {props.info} </a> <a className="link" href={props.link}>|Click Here|</a>
      </div>
    </div>
  );
}



export default Projectss;
