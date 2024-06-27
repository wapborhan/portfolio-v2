import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import enTranslation from "./en.json";
import bnTranslation from "./bn.json";

// We can localize to any language and any number of languages.

i18next

  .use(initReactI18next)

  .init({
    // resources,
    resources: {
      en: { translation: enTranslation },
      bn: { translation: bnTranslation },
    },
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
