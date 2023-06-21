import React from "react";
import SectionTitle from "../Templates/Text/SectionTitle";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const LeftSkills = () => {
  return (
    <>
      <SectionTitle title="Primary Skills On" />
      <div className="skills">
        <div className="each html">
          <div className="box">
            <div className="content">
              <h2>MongoDB</h2>
              <i>
                <SiMongodb />
              </i>
            </div>
          </div>
        </div>
        <div className="each css">
          <div className="box">
            <div className="content">
              <h2>ExpressJS</h2>
              <i>
                <SiExpress />
              </i>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="box">
            <h2>MERN</h2>
          </div>
        </div>
        <div className="each js">
          <div className="box">
            <div className="content">
              <i>
                <SiReact />
              </i>
              <h2>React</h2>
            </div>
          </div>
        </div>
        <div className="each ng">
          <div className="box">
            <div className="content">
              <i>
                <SiNodedotjs />
              </i>
              <h2>NodeJS</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSkills;
