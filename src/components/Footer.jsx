import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const date = new Date();
  return (
    <>
      {/* <Logos data={props.data} /> */}
      <div className="container-fluid">
        <footer>
          <div>
            &#169; {date.getFullYear()} {t("footer.text")}{" "}
            <Link target="_blank" to="/">
              {t("footer.siteName")}
            </Link>{" "}
            | {t("footer.version")}
          </div>
          <div>
            {t("footer.devText")}{" "}
            <Link
              className="text-underline"
              target="__BLANK"
              to={t("footer.devLink")}
            >
              {t("footer.devName")}
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
