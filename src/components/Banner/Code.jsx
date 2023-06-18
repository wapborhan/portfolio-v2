import React from "react";
import { Typewriter } from "react-simple-typewriter";
// for blinking cursor
// import 'react-typed/dist/animatedCursor.css';

export default function Code(props) {
  const handleType = (count) => {
    // console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="art-lg-text art-code mb-25">
      &lt;<i>code</i>&gt;{" "}
      <Typewriter
        words={props.typed}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onLoopDone={handleDone}
        onType={handleType}
      />
      &lt;/<i>code</i>&gt;
    </div>
  );
}
