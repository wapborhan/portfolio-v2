import React from "react";
import SectionTitle from "../Templates/Text/SectionTitle";
import WhyCard from "./WhyCard";

const WhyMe = (props) => {
  const whyme = props.data.posts.filter((month, idx) => idx < 3);
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <SectionTitle title={props.data.title} />

        {/* content */}
        {whyme.map((item) => (
          <div className={"col-lg-" + 12 / props.column}>
            <WhyCard key={item.id} post={item} message={props.data.message} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyMe;
