import React from "react";
import { Avatar } from "@material-ui/core";
//import { makeStyles } from '@material-ui/core/styles';

import "./Buttons.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
    
//   },
//   small: {
//     width: theme.spacing(3),
//     height: theme.spacing(3),
//   },
//   large: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//     fontSize: 30
//   },
// }));

export default function Ava(props) {
  //const classes = useStyles();
  return (
    <div className="ava">
      <Avatar style={{width:"150px", height:"150px", fontSize: "60px", margin:"auto"}}>{props.ava[0]}</Avatar>
    </div>
  );
}
