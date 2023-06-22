import React from "react";
import * as ReactRiIcons from "react-icons/si";

const ReactIcons = {
  ...ReactRiIcons,
};

const SkillsCard = (props) => {
  const categoriesData = [props.data];

  const menuCategories = categoriesData.map((category) => {
    const IconElement = ReactIcons[category.icon];

    return (
      <div className="content">
        <i>{IconElement && <IconElement />}</i>
        <h2>{category.language}</h2>
      </div>
    );
  });
  return (
    <div className={"each " + props.data.class} key={Math.random()}>
      <div className="box">{menuCategories}</div>
    </div>
  );
};

export default SkillsCard;
