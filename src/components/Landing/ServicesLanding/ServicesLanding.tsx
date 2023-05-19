/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const ServicesLanding = () => {
  const images: { source: string; hidden?: boolean }[] = [
    { source: "/images/1-service.jpg" },
    { source: "/images/2-service.jpg" },
    { source: "/images/3-service.jpg" },
    { source: "/images/4-service.jpg", hidden: true },
  ];
  return (
    <section className="services">
      <article className="services__text u-padding-medium ">
        <h2 className="heading-secundary u-padding-top-bottom-medium ">
          En Selvatica
        </h2>
        <div className="u-padding-top-bottom-medium">
          <p className="text-main ">
            En Selvatica, somos expertos en el cuidado y mantenimiento de áreas
            verdes. Ofrecemos servicios de plantación de árboles,
            sustentaciones, podas de altura y difícil acceso, talas
            justificadas, desbroces y jardinería. Nuestro equipo altamente
            capacitado se enfoca en la conservación del medio ambiente y la
            creación de espacios verdes armoniosos y atractivos.
          </p>
        </div>
        <Link href={"/servicios"} className="u-margin-left-auto">
          <p className="text-main u-padding-top-bottom-medium services__link">
            Servicios
          </p>
        </Link>
      </article>
      <article className="services__photos u-padding-large ">
        {images.map(({ source, hidden }, imageIndex) => (
          <div
            key={imageIndex}
            className={`services__photo ${
              hidden ? "services__photo--partial-hidden" : ""
            }`}
          >
            <img src={source} alt="arboricultura" />
          </div>
        ))}
      </article>
    </section>
  );
};

export default ServicesLanding;
