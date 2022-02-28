import React from "react";
import './tabstyle.css'
export default function Panel(props) {
  console.log("Panel props.children: ", props.children);
  return <div className="card-content">{props.children}</div>;
}
