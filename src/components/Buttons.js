import React from "react";
import { Link } from "react-router-dom";

import "./Buttons.css";

export default function Buttons(props) {
  return (
    <div>
      <Link to={`/users/${props.id}`}>
        <button>More details</button>
      </Link>
    </div>
  );
}
