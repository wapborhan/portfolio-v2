import React from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import SectionTitle from "../Templates/Text/SectionTitle";

export default function Contact(props) {
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <div className="col-lg-5">
          <ContactCard data={props.data.info} />
        </div>
        <div className="col-lg-7">
          <ContactForm form={props.data.form} />
        </div>
      </div>
    </div>
  );
}
