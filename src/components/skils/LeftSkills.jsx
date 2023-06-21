import React from "react";
import SectionTitle from "../Templates/Text/SectionTitle";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const LeftSkills = () => {
  return (
    <>
      <SectionTitle title="Primary Skills On" />
      <div class="skills">
        <div class="each html">
          <div class="box">
            <div class="content">
              <h2>MongoDB</h2>
              <i>
                <SiMongodb />
              </i>
            </div>
          </div>
        </div>
        <div class="each css">
          <div class="box">
            <div class="content">
              <h2>ExpressJS</h2>
              <i>
                <SiExpress />
              </i>
            </div>
          </div>
        </div>
        <div class="center">
          <div class="box">
            <h2>MERN</h2>
          </div>
        </div>
        <div class="each js">
          <div class="box">
            <div class="content">
              <i>
                <SiReact />
              </i>
              <h2>React</h2>
            </div>
          </div>
        </div>
        <div class="each ng">
          <div class="box">
            <div class="content">
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
