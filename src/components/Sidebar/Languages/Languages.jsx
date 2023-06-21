import React from "react";
import Language from "./Language";

export default function Languages(props) {
  const skills = props.skills.filter((month, idx) => idx < 4);
  return (
    <div className="art-lang-skills p-30-15">
      {skills.map((l) => (
        <Language key={l.id} id={l.id} language={l.language} level={l.level} />
      ))}
    </div>
  );
}
