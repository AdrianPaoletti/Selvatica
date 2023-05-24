/* eslint-disable @next/next/no-img-element */

const WhoWeAre = () => {
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
            Quienes somos
          </h2>
          <p className="text-main u-padding-top-bottom-medium  ">
            {
              "Selvàtica está conformada por un equipo de arboristas profesionales con más de 15 años de experiencia, impulsados por su amor por los árboles. Nuestro propósito es fortalecer la relación entre la sociedad y los árboles, ofreciendo servicios de calidad que se adapten a las necesidades de nuestras ciudades."
            }
          </p>
          <p className="text-main   u-padding-bottom-medium ">
            {
              "A través de estudios técnicos, ejecutamos las mejores prácticas para el cuidado de los árboles, considerando su carácter biológico y aplicando técnicas vanguardistas. Nuestro objetivo es escuchar a nuestros clientes, comprender sus requerimientos y brindar soluciones efectivas para una convivencia armoniosa con estos seres majestuosos."
            }
          </p>
          <p className="text-main   u-padding-bottom-medium ">
            {
              "En Selvatica, estamos comprometidos con la preservación del entorno y en proporcionar resultados satisfactorios tanto para nuestros clientes como para la naturaleza. Confía en nosotros para cuidar y valorar la vida de los árboles, porque creemos en su importancia y en el impacto positivo que pueden tener en nuestras vidas."
            }
          </p>
        </div>
      </article>
      <article className="who-we-are__team u-padding-medium  ">
        <h3 className="heading-terciary u-padding-top-bottom-medium">Equip</h3>
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
              <p>Arboricultor</p>
            </div>
          </div>
          <div className="who-we-are__image">
            <img
              src="https://simbiosiestudi.com/wp-content/uploads/2022/10/DSCF9358-3-1-scaled.jpg"
              alt=""
              height={600}
              width={420}
            />
            <div className="who-we-are__names">
              <p>Marcos Lopez</p>
              <p>Arboricultor</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhoWeAre;
