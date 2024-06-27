import React from "react";
import SectionTitle from "../Templates/Text/SectionTitle";
import WhyCard from "./WhyCard";

const WhyMe = (props) => {
  const whyme = props.data.posts.filter((month, idx) => idx < props.length);
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <SectionTitle title={props.data.title} />

        {/* content */}
        {whyme.map((item, idx) => (
          <div className={"col-md-6 col-lg-" + 12 / props.column} key={idx}>
            <WhyCard key={item.id} post={item} message={props.data.message} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyMe;
