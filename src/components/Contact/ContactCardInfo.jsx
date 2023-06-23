import React from "react";

export default function ContactCard(props) {
  return (
    <>
      <div className="title-area">
        <h4 className="title">{props.data.name}</h4>
        <span>{props.data.designation}</span>
      </div>
      <div className="description">
        <p>{props.data.conmsg}</p>
        <ul>
          {props.data.link.map((l) => {
            return (
              <li>
                <div className="deccon">
                  {l.tittle}:{" "}
                  <span>
                    <a href={l.url}>{l.text}</a>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
