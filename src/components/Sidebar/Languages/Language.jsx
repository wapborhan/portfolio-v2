// import Circle from "../../Templates/ProgressBars/Circle";
import * as ReactRiIcons from "react-icons/si";

const ReactIcons = {
  ...ReactRiIcons,
};

export default function Language(props) {
  const IconElement = ReactIcons[props.icon];
  return (
    <div className="art-lang-skills-item">
      <div className="cercle-lang">
        <i className={props?.class}>{IconElement && <IconElement />}</i>
      </div>
      {/* <Circle
        key={props.id}
        i={props.id}
        id={"circleprog" + props.id}
        className="art-circle-progress"
        text={props.language}
        percentage={props.level}
      /> */}
      <h6>{props.language}</h6>
    </div>
  );
}
