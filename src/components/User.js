import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function User({ persons }) {
  const { id } = useParams();
  return (
    <div>
      {persons
        .filter((person) => person.id == id)
        .map((person) => {
          return (
            <div key={id}>
              <h1>Name: {person.name}</h1>
              <h1>Username: {person.username}</h1>
              <h1>Email: {person.email}</h1>
              <h1>Phone: {person.phone}</h1>
              <h1>Company: {person.website}</h1>
              <h1>Address:</h1>
              <ul>
                <li>Street: {person.address.street}</li>
                <li>Suite: {person.address.suite}</li>
                <li>City: {person.address.city}</li>
                <li>Zipcode: {person.address.zipcode}</li>
              </ul>
              <div>
                <Link to={`/`}>
                  <button>Home</button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
