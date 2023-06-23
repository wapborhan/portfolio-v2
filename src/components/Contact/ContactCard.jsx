import React from "react";
import ContactCardInfo from "./ContactCardInfo";
import SectionTitle from "../Templates/Text/SectionTitle";

export default function ContactCards(props) {
  return (
    <>
      {" "}
      <SectionTitle title={props.data.title} />
      <div className={"col-lg-" + 12}>
        {/* props.length} */}
        <div className="art-a art-card">
          <div className="art-table p-15-15">
            <div className="row">
              <div className="col-lg-12">
                {" "}
                <iframe
                  src={props.data.maplink}
                  // width="345"
                  className="ifmcontact"
                  height="242"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  tittle="Map"
                ></iframe>
              </div>
            </div>
            <ContactCardInfo data={props.data} />
          </div>
        </div>
      </div>
    </>
  );
}
