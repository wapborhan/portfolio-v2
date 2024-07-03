import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
// import SectionTitle from "../Templates/Text/SectionTitle";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <div className="col-lg-5">
          <ContactCard data={t("main.contact.info", { returnObjects: true })} />
        </div>
        <div className="col-lg-7">
          <ContactForm form={t("main.contact.form", { returnObjects: true })} />
        </div>
      </div>
    </div>
  );
}
