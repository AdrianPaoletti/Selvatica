/* eslint-disable @next/next/no-img-element */

import { useTranslation } from "react-i18next";

const WhoWeAre = () => {
  const { t } = useTranslation(["common"]);

  return (
    <section className="who-we-are">
      <img
        className="who-we-are__image-header"
        src="/images/5-medium.jpg"
        alt=""
      />
      <article className="who-we-are__block u-padding-medium ">
        <div className="who-we-are__text">
          <h2 className="heading-secundary u-padding-top-bottom-medium">
            {t("who_we_are")}
          </h2>
          <p className="text-main u-padding-top-bottom-medium  ">
            {t("who_we_are_paragraph_1")}
          </p>
          <p className="text-main   u-padding-bottom-medium ">
            {t("who_we_are_paragraph_2")}
          </p>
          <p className="text-main   u-padding-bottom-medium ">
            {t("who_we_are_paragraph_3")}
          </p>
        </div>
      </article>
      <article className="who-we-are__team u-padding-medium  ">
        <h3 className="heading-terciary u-padding-top-bottom-medium">
          {t("team")}
        </h3>
        <div className="who-we-are__team-images u-padding-top-medium">
          <div className="who-we-are__image">
            <img
              src="https://simbiosiestudi.com/wp-content/uploads/2022/10/DSCF9358-3-1-scaled.jpg"
              height={600}
              width={420}
              alt=""
            />
            <div className="who-we-are__names">
              <p>Marcos Lopez</p>
              <p>{t("arborist")}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhoWeAre;
