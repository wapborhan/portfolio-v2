import React from "react";
import Logos from "./Logos/Logos";

export default function Footer(props) {
  const date = new Date();
  return (
    <>
      {/* <Logos data={props.data} /> */}
      <div className="container-fluid">
        <footer>
          <div>
            &#169; {date.getFullYear()} All rights reserved by{" "}
            <a target="_blank" href="https://wapborhan.com">
              WapBorhan
            </a>{" "}
            | Version: 2.0
          </div>
          <div>
            Developed by{" "}
            <a className="text-underline" href="https://srdreamlab.com">
              SR Dream Lab
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
