import React from "react";
import { useTranslation } from "react-i18next";

export default function Post(props) {
  const { t } = useTranslation();
  return (
    <div className="art-sm-text">
      <div>
        <span>
          {t("sidebar.profile.designation")}

          {/* {props.designation} */}
        </span>
        <br />
        <a href={props.companylink}>
          {t("sidebar.profile.company")}
          {/* {props.company} */}
        </a>
      </div>
    </div>
  );
}
