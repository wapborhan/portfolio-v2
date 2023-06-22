import React from "react";
import * as ReactRiIcons from "react-icons/si";

const ReactIcons = {
  ...ReactRiIcons,
};

const WhyCard = (props) => {
  const postData = [props.post];

  const whyData = postData.map((category) => {
    const IconElement = ReactIcons[category.icon];

    return (
      <div className="content">
        <div className="art-post-description text-center">
          <div className="icon mb-4">
            <i>{IconElement && <IconElement />}</i>
          </div>
          <h5 className="mb-15">{category.title}</h5>
          <div className="mb-15">{category.overview}</div>
        </div>

        <h2></h2>
      </div>
    );
  });
  return <div className="art-a art-blog-card rounded">{whyData}</div>;
};

export default WhyCard;
