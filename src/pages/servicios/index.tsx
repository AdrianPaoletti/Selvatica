/* eslint-disable @next/next/no-img-element */

import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation(["common"]);

  const services = [
    {
      title: "tree_plantation",
      text: "tree_plantation_paragraph",
    },
    {
      title: "underpinnings",
      text: "underpinnings_paragraph",
    },
    {
      title: "high_pruning",
      text: "high_pruning_paragraph",
    },
    {
      title: "justified_felling",
      text: "justified_felling_paragraph",
    },
    {
      title: "clearing",
      text: "clearing_paragraph",
    },
    {
      title: "gardening",
      text: "gardening_paragraph",
    },
  ];

  return (
    <section className="services-page">
      <img src="/images/10-medium.jpg" alt="" />
      <article className="service__block u-padding-medium u-margin-bottom-medium-large">
        <div className="service__text">
          <h2 className="heading-secundary u-padding-top-bottom-medium">
            {t("services")}
          </h2>
          <p className="text-main u-padding-top-bottom-medium  ">
            {t("ecosystem_paragraph_2")}
          </p>
          <p className="text-main   u-padding-bottom-medium ">
            {t("ecosystem_paragraph_3")}
          </p>
        </div>
      </article>
      <article className="service__video">
        <div className="service__video-container">
          <video
            src="/video/video-2.mp4"
            width={585}
            controls
            autoPlay
            loop
            muted
          />
        </div>
        <div className="service__text service__text--video">
          {services.map(({ title, text }) => (
            <div className="text-main u-padding-top-bottom-small  " key={title}>
              <h3 className="heading-terciary">{t(title)}</h3>
              <p className="text-main u-padding-top-bottom-medium">{t(text)}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Services;
