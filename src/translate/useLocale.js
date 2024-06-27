import { useState, useEffect } from "react";
import i18n from "i18next";

export function useLocale() {
  const [locale, setLocale] = useState(
    localStorage.getItem("locale") || i18n.language
  );

  useEffect(() => {
    localStorage.setItem("locale", locale);
    i18n.changeLanguage(locale);
  }, [locale]);

  return [locale, setLocale];
}
