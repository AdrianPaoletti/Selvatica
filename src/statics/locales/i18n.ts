import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import { imports as importsCat } from "./cat/imports";
import { imports as importsEs } from "./es/imports";

const resources = {
  cat: importsCat,
  es: importsEs,
};

i18n
  .use(initReactI18next)
  .init(
    {
      resources,
      defaultNS: "common",
      keySeparator: false,
      fallbackLng: "es",
      interpolation: {
        escapeValue: false,
      },
      load: "languageOnly",
      detection: { order: ["navigator"] },
    },
    (error) => {
      if (error) {
        console.log("Error i18n", error);
        return;
      }
    }
  );

export default i18n;
