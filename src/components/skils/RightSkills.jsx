import React, { Fragment } from "react";
import SectionTitle from "../Templates/Text/SectionTitle";
import { SiMongodb } from "react-icons/si";

const RightSkils = () => {
  return (
    <Fragment>
      {" "}
      <>
        <SectionTitle title="Secondary  Skills On" />
        <div className="rightskills">
          <div className="each">
            <div className="box">
              <div className="content">
                <SiMongodb />
                <h2>MongoDB</h2>
              </div>
            </div>
          </div>
          <div className="each ">
            <div className="box">
              <div className="content">
                <i className="fa-brands fa-css3"></i>
                <h2>ExpressJS</h2>
              </div>
            </div>
          </div>
          <div className="each ">
            <div className="box">
              <div className="content">
                <i className="fa-brands fa-css3"></i>
                <h2>ExpressJS</h2>
              </div>
            </div>
          </div>
          <div className="each ">
            <div className="box">
              <div className="content">
                <i className="fa-brands fa-css3"></i>
                <h2>ExpressJS</h2>
              </div>
            </div>
          </div>
        </div>
      </>{" "}
      <>
        <SectionTitle title="Tools I Used" />
        <div className="rightskills">
          <div className="each">
            <div className="box">
              <div className="content">
                <SiMongodb />
                <h2>MongoDB</h2>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="box">
              <div className="content">
                <SiMongodb />
                <h2>MongoDB</h2>
              </div>
            </div>
          </div>
          <div className="each ">
            <div className="box">
              <div className="content">
                <i className="fa-brands fa-css3"></i>
                <h2>ExpressJS</h2>
              </div>
            </div>
          </div>
          <div className="each ">
            <div className="box">
              <div className="content">
                <i className="fa-brands fa-css3"></i>
                <h2>ExpressJS</h2>
              </div>
            </div>
          </div>
          <div className="each ">
            <div className="box">
              <div className="content">
                <i className="fa-brands fa-css3"></i>
                <h2>ExpressJS</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    </Fragment>
  );
};

export default RightSkils;
