import React from "react";
import "./Card.css";


import Buttons from "./Buttons";
import Ava from "./Ava";

export default function Card(props) {
  return (
    <div className="card">
      <div className="ava">
        <Ava ava={props.card.name} />
      </div>
      <div className="info">
        <h1>{props.card.name}</h1>
        <h2 id="username">&#64;{props.card.username}</h2>
        <h2 id="website">
          <a href="#">http://{props.card.website}</a>
        </h2>
      </div>
      <div id="detail">
        <Buttons id={props.card.id} />
      </div>
    </div>
  );
}
