import React from "react";
import { IoLogoDropbox } from "react-icons/io5";
import * as ReactRiIcons from "react-icons/si";

const ReactIcons = {
  ...ReactRiIcons,
};

const SkillsCard = (props) => {
  const categoriesData = [props.data];

  const menuCategories = categoriesData.map((category, idx) => {
    const IconElement = ReactIcons[category.icon];

    return (
      <div className="content" key={IoLogoDropbox}>
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
