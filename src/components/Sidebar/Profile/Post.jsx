import React from "react";

export default function Post(props) {
  return (
    <div className="art-sm-text">
      <div>
        <span>{props.designation}</span>
        <br />
        <a href={props.companylink}>{props.company}</a>
      </div>
    </div>
  );
}
