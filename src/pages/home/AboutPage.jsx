import { useTranslation } from "react-i18next";
import About from "../../components/About/About";
import Hobbies from "../../components/Hobbies/Hobbies";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <About />
      <Hobbies data={t("main.hobbies", { returnObjects: true })} />
    </>
  );
}
