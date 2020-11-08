import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./User.css";

export default function User({ users }) {
  const { id } = useParams();
  return (
    <div>
      {users
        .filter((user) => user.id == id)
        .map((user) => {
          return (
            <div key={id} className="container-user">
              <div id="user">
                <ul>
                  <li>
                    <h1>Name: {user.name}</h1>
                  </li>
                  <li>
                    <h1>Username: {user.username}</h1>
                  </li>
                  <li>
                    <h1>Email: {user.email}</h1>
                  </li>
                  <li>
                    <h1>Phone: {user.phone}</h1>
                  </li>
                  <li>
                    <h1>Company: {user.company.name}</h1>
                  </li>
                  <li>
                    <h1>Website: {user.website}</h1>
                  </li>
                  <li>
                    <h1>Address:</h1>
                  </li>
                  <ul id="address">
                    <li>Street: {user.address.street}</li>
                    <li>Suite: {user.address.suite}</li>
                    <li>City: {user.address.city}</li>
                    <li>Zipcode: {user.address.zipcode}</li>
                  </ul>
                </ul>
              </div>
              <div>
                <Link to={`/`}>
                  <button id="home">Home</button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
