import React from "react";
import ListItem from "./ListItem";
import { useTranslation } from "react-i18next";

export default function About(props) {
  const { t } = useTranslation();
  return (
    <div className="art-table p-15-15">
      <ul>
        {/* {t("sidebar.about", { joinArrays: " " })} */}
        {t("sidebar.about", { returnObjects: true }).map((li) => (
          <ListItem
            key={li.id}
            title={li.title}
            subtitle={li.subtitle}
            link={li.link}
          />
        ))}
      </ul>
    </div>
  );
}
