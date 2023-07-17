import { useTranslation } from "react-i18next";

const BiodiversityLanding = () => {
  const { t } = useTranslation(["common"]);
  return (
    <section className="biodiversity u-padding-medium">
      <h2 className="heading-secundary u-padding-top-bottom-medium ">
        {t("ecosystem")}
      </h2>
      <div className="u-padding-top-bottom-medium">
        <p className="text-main">{t("ecosystem_paragraph_1")}</p>
        <p className="text-main u-padding-top-bottom-medium">
          {t("ecosystem_paragraph_2")}
        </p>
        <p className="text-main" id="contact">
          {t("ecosystem_paragraph_3")}
        </p>
      </div>
    </section>
  );
};

export default BiodiversityLanding;
