import React from "react";
import { Link } from "react-router-dom";

export default function button(props) {
  return (
    <div>
      <Link to={`/users/${props.id}`}>
        <button>More details</button>
      </Link>
    </div>
  );
}
