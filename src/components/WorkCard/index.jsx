import React from "react";
import "./style.css";

function DisplayCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Name:</strong> {props.name}
          </li>
          <li>
            <strong>Info:</strong> {props.info}
          </li>
          <li>
            <a href={props.link}>Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}



export default DisplayCard;
