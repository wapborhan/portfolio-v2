import { useTranslation } from "react-i18next";
import SectionTitle from "../Templates/Text/SectionTitle";
import WhyCard from "./WhyCard";

const WhyMe = (props) => {
  const { t } = useTranslation();

  console.log(t("main.why"));
  const whyme = t("main.why.posts", { returnObjects: true }).filter(
    (month, idx) => idx < props.length
  );
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <SectionTitle
          title={t("main.why.title")}
          rightTitle={t("main.why.righttitle.text")}
          rightLink={t("main.why.righttitle.link")}
        />

        {/* content */}
        {whyme.map((item, idx) => (
          <div className={"col-md-6 col-lg-" + 12 / props.column} key={idx}>
            <WhyCard key={item.id} post={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyMe;
