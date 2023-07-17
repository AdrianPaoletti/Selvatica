/* eslint-disable @next/next/no-img-element */

import { useTranslation } from "react-i18next";
import Link from "next/link";

const ServicesLanding = () => {
  const { t } = useTranslation(["common"]);
  const images: { source: string; id?: string; hidden?: boolean }[] = [
    { source: "/images/1-service.jpg" },
    { source: "/images/2-service.jpg" },
    { source: "/images/3-service.jpg", id: "biodiversity" },
    { source: "/images/4-service.jpg", hidden: true },
  ];
  return (
    <section className="services">
      <article className="services__text u-padding-medium ">
        <h2 className="heading-secundary u-padding-top-bottom-medium ">
          {t("in-selvatica")}
        </h2>
        <div className="u-padding-top-bottom-medium">
          <p className="text-main ">{t("services_landing_paragraph_1")}</p>
        </div>
        <Link href={"/servicios"} className="u-margin-left-auto">
          <p className="text-main u-padding-top-bottom-medium services__link">
            {t("services")}
          </p>
        </Link>
      </article>
      <article className="services__photos u-padding-large ">
        {images.map(({ source, hidden, id }, imageIndex) => (
          <div
            key={imageIndex}
            className={`services__photo ${
              hidden ? "services__photo--partial-hidden" : ""
            }`}
            id={id}
          >
            <img src={source} alt="arboricultura" />
          </div>
        ))}
      </article>
    </section>
  );
};

export default ServicesLanding;
