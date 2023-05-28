import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import commonCat from "./cat/common.json";
import commonEs from "./es/common.json";

const resources = {
  cat: { common: commonCat },
  es: { common: commonEs },
};

i18n.use(initReactI18next).init(
  {
    resources,
    defaultNS: "common",
    keySeparator: false,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    load: "languageOnly",
    detection: { order: ["localStorage", "navigator"] },
  },
  (error) => {
    if (error) {
      console.log("Error i18n", error);
      return;
    }
  }
);

export default i18n;
