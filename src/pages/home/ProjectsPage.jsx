import { useState } from "react";
import ProjectsGrid from "../../components/Projects/ProjectsGrid";
import { useTranslation } from "react-i18next";

export default function ProjectsPage(props) {
  const { t } = useTranslation();

  // state for storing the filter keyword, with an initial value of null, which means no filter is applied
  const [currentFilter, setCurrentFilter] = useState(null);

  return (
    <>
      <ProjectsGrid
        data={t("main.projects", { returnObjects: true })}
        column={props.column || 3}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
    </>
  );
}
