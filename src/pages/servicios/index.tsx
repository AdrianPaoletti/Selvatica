/* eslint-disable @next/next/no-img-element */

const Services = () => {
  const services = [
    {
      title: "Plantación de árboles",
      text: "Nuestro equipo de expertos realiza exhaustivos estudios del entorno para seleccionar cuidadosamente las especies más adecuadas para cada contexto. Además, preparamos el sustrato de manera meticulosa mediante la incorporación de hongos micorrízicos, potenciando así el desarrollo y crecimiento saludable de los árboles y palmeras que plantamos.",
    },
    {
      title: "Sustentaciones",
      text: "Para garantizar la seguridad y prolongar la vida útil de los árboles, implementamos sustentaciones y anclajes en sus ramas. Estas medidas no solo reducen riesgos potenciales, sino que también preservan la estabilidad y la estructura arbórea en su máximo esplendor.",
    },
    {
      title: "Podas de altura y difícil acceso",
      text: "Nuestro equipo realiza podas precisas en árboles y palmeras ubicados en zonas de difícil acceso. Utilizando técnicas de trepa y apeo controlado, nos aseguramos de que las podas sean realizadas con destreza y pericia, garantizando así la salud y la belleza de los ejemplares.",
    },
    {
      title: "Talas justificadas",
      text: "En casos debidamente justificados, llevamos a cabo talas de árboles y palmeras. Nuestro equipo emplea técnicas especializadas de trepa y apeo controlado para llevar a cabo estas acciones de manera segura y efectiva, siempre respetando la integridad del entorno natural.",
    },
    {
      title: "Desbroces",
      text: "Realizamos desbroces de parcelas y terrenos, eliminando la vegetación no deseada de manera eficiente. Esta tarea es especialmente útil para preparar el terreno antes de nuevas plantaciones o para mantener áreas limpias y despejadas, proporcionando un entorno más estético y ordenado.",
    },
    {
      title: "Jardinería",
      text: "Con un enfoque en el diseño, instalación y mantenimiento de áreas verdes, ofrecemos servicios de jardinería completos. Nuestro equipo se encarga de crear espacios armoniosos y atractivos, cuidando cada detalle y utilizando técnicas de cuidado de plantas y césped de vanguardia.",
    },
  ];

  return (
    <section className="services-page">
      <img src="/images/3-medium.jpg" alt="" />
      <article className="service__block u-padding-medium u-margin-bottom-medium-large">
        <div className="service__text">
          <h2 className="heading-secundary u-padding-top-bottom-medium">
            Servicios
          </h2>
          <p className="text-main u-padding-top-bottom-medium u-margin-left-right-medium">
            Los árboles grandes desempeñan un papel fundamental como filtros
            naturales, capturando y reteniendo contaminantes urbanos y
            partículas finas, como polvo, suciedad y humo, en sus hojas y
            corteza. Además, la ubicación estratégica de los árboles en las
            ciudades puede contribuir a reducir la temperatura del aire entre 2
            y 8 grados centígrados, brindando espacios más frescos y saludables.
          </p>
          <p className="text-main u-margin-left-right-medium u-padding-bottom-medium ">
            En Selvatica, nos hemos propuesto el objetivo de convertir nuestras
            ciudades en entornos más verdes, frescos y saludables, mediante la
            promoción de árboles de alta calidad, más grandes y seguros. Nos
            enorgullece trabajar en la creación de áreas urbanas que beneficien
            tanto a los seres humanos como a la Ecosistema que nos rodea.
          </p>
        </div>
      </article>
      <article className="service__video ">
        <div className="service__video-container">
          <video src="/video/video-2.mp4" width={628} autoPlay loop muted />
        </div>
        <div className="service__text service__text--video">
          {services.map(({ title, text }) => (
            <div
              className="text-main u-padding-top-bottom-small u-margin-left-right-medium"
              key={title}
            >
              <h3 className="heading-terciary">{title}</h3>
              <p className="text-main u-padding-top-bottom-medium u-margin-left-right-medium">
                {text}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Services;
