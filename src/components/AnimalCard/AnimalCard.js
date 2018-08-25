import React from "react";
import "./AnimalCard.css";

const AnimalCard = (props) => (
  <div className="card">
    <div className="img-container">
      <img
        alt={props.name}
        src={props.image}
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Animal:</strong>{props.name}
        </li>
      </ul>
    </div>
  </div>
);

export default AnimalCard;