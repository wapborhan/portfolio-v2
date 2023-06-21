import React from "react";

const WhyCard = (props) => {
  return (
    <div className="art-a art-blog-card rounded">
      <div className="art-post-description text-center">
        <div className="icon mb-4">Icon</div>
        <h5 className="mb-15">{props.post.title}</h5>
        <div className="mb-15">{props.post.overview}</div>
      </div>
    </div>
  );
};

export default WhyCard;
