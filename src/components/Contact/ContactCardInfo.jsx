import React from "react";

export default function ContactCard(props) {
  return (
    <>
      <div className="title-area">
        <h3 className="title mt-3">{props.data.name}</h3>
        <h5 className="desc mt-2 mb-3">{props.data.designation}</h5>
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
