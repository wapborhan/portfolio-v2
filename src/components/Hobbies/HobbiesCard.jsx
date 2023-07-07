import React, { useEffect, useState } from "react";

export default function HobbiesCard(props) {
  const [cliimage, setImage] = useState("");

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode");
    console.log(isDark);
    if (!isDark) {
      const values = props.image;
      setImage(values);
    } else {
      const values = props.imagewhite;
      setImage(values);
    }
    // setImage = values;
    // return () => {
    //   imaged;
    // };
  }, []);

  return (
    <div className={"art-a art-" + props.section + "-item-frame"}>
      <a
        data-fancybox="hobbies"
        // href={process.env.PUBLIC_URL + props.fancybox}
        href={props.fancybox}
        target="__BLANK"
        className={"art-a art-" + props.section + "-item-frame art-horizontal"}
      >
        {/* <img src={process.env.PUBLIC_URL + props.image} alt={props.title} /> */}
        <img src={cliimage} alt={props.title} />

        <span className="art-item-hover">
          <i className="fas fa-expand"></i>
        </span>
      </a>
    </div>
  );
}
