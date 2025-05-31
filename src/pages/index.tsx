import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import BiodiversityLanding from "selvatica/components/Landing/BiodiversityLanding/BiodiversityLanding";
import CarouselLanding from "selvatica/components/Landing/CarouselLanding/CarouselLanding";
import ContactLanding from "selvatica/components/Landing/ContactLanding/ContactLanding";
import ServicesLanding from "selvatica/components/Landing/ServicesLanding/ServicesLanding";
import SelvaticaContext from "selvatica/core/store/context/SelvaticaContext";

export default function Landing() {
  const { t } = useTranslation(["common"]);
  const { isMenuOpen } = useContext(SelvaticaContext);

  return (
    <>
      <Head>
        <title>Selvàtica - Arboricultura</title>
        <meta
          name="description"
          content={t("meta_description") as string}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/pine-tree.png" />
      </Head>
      <main className={`landing`}>
        <CarouselLanding isMenuOpen={isMenuOpen} />
        <ServicesLanding />
        <BiodiversityLanding />
        <ContactLanding />
      </main>
    </>
  );
}
