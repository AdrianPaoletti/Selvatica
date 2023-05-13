/* eslint-disable @next/next/no-img-element */

const ServicesLanding = () => {
  return (
    <section className="services">
      <article className="u-padding-medium">
        <h2 className="heading-secundary u-padding-top-bottom-medium">
          En Selvatica ...
        </h2>
        <p className="text-main u-padding-top-bottom-medium u-margin-left-right-medium">
          Conscients del valor de preservar i expandir la diversitat biològica,
          cada cop més, veiem com tant en el sector públic com privat,
          incorporen projectes que fomenten el desenvolupament de nous espais on
          la biodiversitat passa a ser un factor essencial. A Simbiosi tenim una
          llarga trajectòria en el camp de la revegetació urbana.
        </p>
        <p className="text-main u-padding-top-bottom-medium u-margin-left-right-medium services__link">
          Serveis
        </p>
      </article>
      <article className="services__photos u-padding-large ">
        <div className="services__photo">
          <img src="/images/1-medium.jpg" alt="cenote zanzibar" />
        </div>
        <div className="services__photo">
          <img src="/images/2-medium.jpg" alt="cenote zanzibar" />
        </div>
        <div className="services__photo">
          <img src="/images/1-medium.jpg" alt="cenote zanzibar" />
        </div>
        <div className="services__photo services__photo--partial-hidden">
          <img src="/images/2-medium.jpg" alt="cenote zanzibar" />
        </div>
      </article>
    </section>
  );
};

export default ServicesLanding;
