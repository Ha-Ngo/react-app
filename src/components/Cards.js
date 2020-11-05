import "./Cards.css";

import React from "react";
import Card from "./Card";

export default function Cards(props) {
  return (
    <div className="container">
      {props.cards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
  );
}
