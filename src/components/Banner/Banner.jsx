import Code from "./Code";
import { NavLink } from "react-router-dom";
// import { rng } from "../../assets/js/main.js";
import { useTranslation } from "react-i18next";

export default function Banner(props) {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row p-60-0 p-lg-30-0 p-md-15-0">
        <div className="col-lg-12">
          {/* background image */}
          <div
            className="art-a art-banner"
            // style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + props.background.current + ')' }}
            style={{ backgroundImage: "url(images/backgrounds/bg.jpg)" }}
          >
            <div className="art-banner-back"></div>
            <div className="art-banner-dec"></div>
            <div className="art-banner-overlay">
              <div className="art-banner-title">
                {/* title */}
                <h1 className="mb-15">
                  <div> {t("main.banner.heading.0")}</div>
                  <div> {t("main.banner.heading.1")}</div>
                  {/* {props.data.heading.map((h) => (
                    <div key={h}>{h}</div>
                  ))} */}
                </h1>

                {/* typed text */}
                {/* <Code typed={props.data.typed} /> */}
                <Code typed={t("main.banner.typed", { returnObjects: true })} />

                {/* button */}
                <div className="art-buttons-frame">
                  {/* button v1 (an actual button) */}
                  {/* <a href={props.data.button.url} className='art-btn art-btn-md'>
                    <span>{props.data.button.text}</span>
                  </a> */}
                  {/* button v2 (a div with onclick) */}
                  <NavLink
                    className="art-btn art-btn-md btn-v2"
                    to={props.data.button.url}
                  >
                    <span>
                      {t("main.banner.button.text")}
                      {/* {props.data.button.text} */}
                    </span>
                  </NavLink>
                </div>
              </div>
              {/* avatar */}
              <img
                // src={process.env.PUBLIC_URL + props.data.avatar}
                src={props.data.avatar}
                className="art-banner-photo"
                alt="Banner Profile"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
