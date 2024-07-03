import { useEffect } from "react";
import { loading } from "../../assets/js/main.js";
import { useTranslation } from "react-i18next";
import { useLocale } from "../../translate/useLocale";

export default function Preloader() {
  const [locale, setLocale] = useLocale();
  useEffect(() => {
    loading();
  }, [loading]);

  return (
    <div id="art-preloader" className="art-preloader">
      <div className="art-preloader-content">
        <h4>{locale === "en" ? "Welcome" : "স্বাগতম"}</h4>
        <div id="preloader" className="art-preloader-load"></div>
      </div>
    </div>
  );
}
