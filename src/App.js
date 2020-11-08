import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";

import Cards from "./components/Cards";
import User from "./components/User";

function App() {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setPerson(json));
  }, []);

  return (
    <Router>
      <Route exact path="/" component={Cards}>
        <div className="App">
          <Cards cards={person} />
        </div>
      </Route>
      <Route path="/users/:id" component={User}>
        <User users={person} />
      </Route>
    </Router>
  );
}

export default App;
