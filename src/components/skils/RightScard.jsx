import React from "react";
import * as ReactRiIcons from "react-icons/si";

const ReactIcons = {
  ...ReactRiIcons,
};

const RightScard = (props) => {
  const categoriesData = [props.data];

  const menuCategories = categoriesData.map((category) => {
    const IconElement = ReactIcons[category.icon];

    return (
      <div className="content">
        {IconElement && <IconElement />}
        <h2>{category.language}</h2>
      </div>
    );
  });
  return (
    <div className="each" key={props.data.id}>
      <div className="box">{menuCategories}</div>
    </div>
  );
};

export default RightScard;
