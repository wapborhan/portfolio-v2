import { useTranslation } from "react-i18next";
import LeftSkils from "./LeftSkills";
import RightSkils from "./RightSkills";

const Skils = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row p-60-0 p-lg-30-0 p-md-15-0">
        <div className="col-lg-6 col-md-12">
          <LeftSkils data={t("main.skills.primary", { returnObjects: true })} />
        </div>
        <div className="col-lg-6 col-md-12">
          <RightSkils data={t("main.skills", { returnObjects: true })} />
        </div>
      </div>
    </div>
  );
};

export default Skils;
