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
            <h2>MERN</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSkills;
