import React, { Fragment } from "react";
import SectionTitle from "../Templates/Text/SectionTitle";
import SkillsCard from "./SkillsCard";

const RightSkils = (props) => {
  return (
    <Fragment>
      <>
        <SectionTitle title={props.data.secondray.tittle} />
        <div className="rightskills">
          {props.data.secondray.category.map((s) => {
            return <SkillsCard key={Math.random()} data={s} />;
          })}
        </div>
      </>
      <>
        <SectionTitle title={props.data.tools.tittle} />
        <div className="rightskills">
          {props.data.tools.category.map((s) => {
            return <SkillsCard key={Math.random()} data={s} />;
          })}
        </div>
      </>
      <>
        <SectionTitle title={props.data.css.tittle} />
        <div className="rightskills">
          {props.data.css.category.map((s) => {
            return <SkillsCard key={Math.random()} data={s} />;
          })}
        </div>
      </>
    </Fragment>
  );
};

export default RightSkils;
