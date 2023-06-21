import React from "react";
import SectionTitle from "../Templates/Text/SectionTitle";
import { SiMongodb } from "react-icons/si";

const RightSkils = () => {
  return (
    <>
      <SectionTitle title="Secondary  Skills On" />
      <div class="rightskills">
        <div class="each">
          <div class="box">
            <div class="content">
              <SiMongodb />
              <h2>MongoDB</h2>
            </div>
          </div>
        </div>
        <div class="each ">
          <div class="box">
            <div class="content">
              <i class="fa-brands fa-css3"></i>
              <h2>ExpressJS</h2>
            </div>
          </div>
        </div>
        <div class="each ">
          <div class="box">
            <div class="content">
              <i class="fa-brands fa-css3"></i>
              <h2>ExpressJS</h2>
            </div>
          </div>
        </div>
        <div class="each ">
          <div class="box">
            <div class="content">
              <i class="fa-brands fa-css3"></i>
              <h2>ExpressJS</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSkils;
