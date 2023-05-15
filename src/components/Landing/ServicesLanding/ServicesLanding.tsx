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
      <article className="services__text u-padding-medium">
        <h2 className="heading-secundary u-padding-top-bottom-medium">
          En Selvatica ...
        </h2>
        <div className="u-padding-top-bottom-medium">
          <p className="text-main u-margin-left-right-medium">
            Somos una empresa comprometida con la preservación y creación de
            nuevos ecosistemas, con el fin de promover la diversidad biológica y
            aprovechar todos sus beneficios. Contamos con un equipo profesional
            altamente capacitado y comprometido con la conservación del medio
            ambiente y el cuidado de la naturaleza.
          </p>
          <p className="text-main u-padding-top-bottom-medium u-margin-left-right-medium">
            Estamos listos para brindarte soluciones adaptadas a tus necesidades
            y contribuir al bienestar de tus espacios verdes mediante nuestros
            servicios de plantación de árboles, sustentaciones, podas de altura
            y difícil acceso, entre otros.
          </p>
        </div>
        <Link href={"/servicios"} className="u-margin-left-auto">
          <p className="text-main u-padding-top-bottom-medium u-margin-left-right-medium services__link">
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
            <img src={source} alt="cenote zanzibar" />
          </div>
        ))}
      </article>
    </section>
  );
};

export default ServicesLanding;
