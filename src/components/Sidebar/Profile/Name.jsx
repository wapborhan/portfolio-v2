import React from "react";
import { useTranslation } from "react-i18next";

export default function Name(props) {
  const { t } = useTranslation();
  return (
    <h5 className="art-name mb-10">
      <a href="/">
        {/* {props.name} */}
        {t("sidebar.profile.name")}
      </a>
    </h5>
  );
}
