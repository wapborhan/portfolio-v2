import Code from "./Code";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row p-60-0 p-lg-30-0 p-md-15-0">
        <div className="col-lg-12">
          {/* background image */}
          <div
            className="art-a art-banner"
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
                </h1>

                {/* typed text */}
                {/* <Code typed={props.data.typed} /> */}
                <Code typed={t("main.banner.typed", { returnObjects: true })} />

                <div className="art-buttons-frame">
                  <NavLink
                    className="art-btn art-btn-md btn-v2"
                    to={t("main.banner.button.url")}
                  >
                    <span>{t("main.banner.button.text")}</span>
                  </NavLink>
                </div>
              </div>
              {/* avatar */}
              <img
                src={t("main.banner.avatar")}
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
