import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";

import Persons from "./components/Persons";
import User from "./components/User";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setPersons(json));
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <Persons persons={persons} />
        </div>
      </Route>
      <Route path="/users/:id">
        <User persons={persons} />
      </Route>
    </Router>
  );
}

export default App;
