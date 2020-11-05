import React from "react";
import Person from "./Person";


export default function Persons(props) {
  return (
    <div className="card-grid">
      {props.persons.map((person) => {
        return <Person person={person} key={person.id} />;
      })}
    </div>
  );
}
