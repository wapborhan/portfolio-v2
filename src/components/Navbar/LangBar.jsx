import React, { useState, useEffect } from "react";
const darkMode = "darkMode";

const LangBar = () => {
  const [isDark, setDark] = useState(localStorage.getItem(darkMode) === "true");
  const toggleDark = () => {
    const newValue = !isDark;
    setDark(newValue);
    localStorage.setItem(darkMode, newValue.toString());
    document.body.classList.toggle("white-version");
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
          {!isDark ? <i class="far fa-sun"></i> : <i class="fas fa-moon"></i>}
        </a>
      </li>
      <br />
      <br />
      <li>
        <a href="#.">BN</a>
      </li>
      <li className="art-active-lang">
        <a href="#.">EN</a>
      </li>
    </ul>
  );
};

export default LangBar;
