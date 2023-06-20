import React from "react";

export default function ListItem(props) {
  return (
    <li>
      <h6>{props.title}</h6>
      <a href={props.link} target="__BLANK">
        <span>{props.subtitle}</span>
      </a>
    </li>
  );
}
