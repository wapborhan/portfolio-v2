import React, { useState, useEffect } from "react";
import { useLocale } from "../../translate/useLocale";
const darkMode = "darkMode";

const LangBar = () => {
  const [isDark, setDark] = useState(localStorage.getItem(darkMode) === "true");
  const [locale, setLocale] = useLocale();
  const toggleDark = () => {
    const newValue = !isDark;
    setDark(newValue);
    localStorage.setItem(darkMode, newValue.toString());
    // document.body.classList.toggle("white-version");
  };

  useEffect(() => {
    if (isDark) {
      const html = document.querySelector("html");
      html.setAttribute("data-theme", "white");
      // document.body.classList.add("white-version");
    } else {
      const html = document.querySelector("html");
      html.setAttribute("data-theme", "dark");
      // document.body.classList.remove("white-version");
    }
  }, [isDark]);

  return (
    <ul className="art-language-change">
      <li>
        <a style={{ cursor: "pointer" }} onClick={toggleDark}>
          {!isDark ? (
            <i className="far fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </a>
      </li>
      <br />
      <br />
      <li
        style={{ cursor: "pointer" }}
        className={locale === "en" ? "art-active-lang" : ""}
      >
        <a onClick={() => setLocale("en")}>EN</a>
      </li>
      <li className={locale === "bn" ? "art-active-lang" : ""}>
        <a style={{ cursor: "pointer" }} onClick={() => setLocale("bn")}>
          BN
        </a>
      </li>
    </ul>
  );
};

export default LangBar;
