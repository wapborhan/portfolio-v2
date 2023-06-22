import React, { Fragment } from "react";
import SectionTitle from "../Templates/Text/SectionTitle";
import { SiMongodb } from "react-icons/si";
import RightScard from "./RightScard";

const RightSkils = (props) => {
  return (
    <Fragment>
      <>
        <SectionTitle title="Secondary  Skills On" />
        <div className="rightskills">
          {props.data.map((s) => {
            return <RightScard key={s.id} data={s} />;
          })}
        </div>
      </>
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
