import React from "react";
import SectionTitle from "../Templates/Text/SectionTitle";
import SkillsCard from "./SkillsCard";
import * as ReactRiIcons from "react-icons/si";

const ReactIcons = {
  ...ReactRiIcons,
};

const LeftSkills = (props) => {
  return (
    <>
      <SectionTitle title={props.data.tittle} />

      <div className="skills">
        {props.data.category.map((s) => {
          return <SkillsCard key={s.id} data={s} />;
        })}

        <div className="center">
          <div className="box">
            <h2>
              <span className="mongo">M</span>
              <span className="exprs">E</span>
              <span className="react">R</span>
              <span className="node">N</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSkills;
