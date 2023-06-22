import React from "react";

import LeftSkils from "./LeftSkills";
import RightSkils from "./RightSkills";

const Skils = (props) => {
  return (
    <div className="container-fluid">
      <div className="row p-60-0 p-lg-30-0 p-md-15-0">
        <div className="col-lg-6 col-md-12">
          <LeftSkils data={props.data.primary} />
        </div>
        <div className="col-lg-6 col-md-12">
          <RightSkils data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default Skils;
