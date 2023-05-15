import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ContactLanding = () => {
  return (
    <section className="contact u-padding-medium" id="contact">
      <h2 className="heading-secundary u-padding-top-bottom-medium">
        Contacto
      </h2>
      <div className="contact-content">
        <div className="contact-block u-padding-top-bottom-medium">
          <p className="contact-text text-main u-margin-left-right-medium">
            Dirección
          </p>
          <p className="contact-text text-main u-margin-left-right-medium">
            Paseo marítimo 201, 08860 – Castelldefels (Barcelona)
          </p>
        </div>
        <div className="contact-block u-padding-top-bottom-medium">
          <p className="contact-text text-main u-margin-left-right-medium">
            Contacto
          </p>
          <p className="contact-text text-main u-margin-left-right-medium">
            +34 657 099 946
          </p>
        </div>
      </div>
      <div className="contact__social-media u-margin-left-right-medium">
        <a href="https://instagram.com/selvatica.arboricultura?igshid=MzRlODBiNWFlZA==">
          <InstagramIcon fontSize="inherit" color="inherit" />
        </a>
        <a href="https://instagram.com/selvatica.arboricultura?igshid=MzRlODBiNWFlZA==">
          <FacebookIcon fontSize="inherit" color="inherit" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=selvatica.arboricultura@gmail.com">
          <MailOutlineIcon fontSize="inherit" color="inherit" />
        </a>
      </div>
    </section>
  );
};

export default ContactLanding;
