import React from "react";
import Button from "./Button";
import Image from "./Image";

export default function Person(props) {
  return (
    <div className="card">
      <div className="image">
        <Image image={props.person.name} />
      </div>
      <div className="info">
        <h1>{props.person.name}</h1>
        <h2>&#64;{props.person.username}</h2>
        <h2>
          <a href="#">http://{props.person.website}</a>
        </h2>
      </div>
      <div>
        <Button id={props.person.id} />
      </div>
    </div>
  );
}
