import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactLanding = () => {
  return (
    <section className="contact u-padding-medium" id="contact">
      <h2 className="heading-secundary u-padding-top-bottom-medium">
        Contacte
      </h2>
      <div className="contact-content">
        <div className="contact-block u-padding-top-bottom-medium">
          <p className="contact-text text-main u-margin-left-right-medium">
            Admninistracio
          </p>
          <p className="contact-text text-main u-margin-left-right-medium">
            C. Nord 21, 08921 – Santa Coloma de Gramenet (Barcelona)
          </p>
        </div>
        <div className="contact-block u-padding-top-bottom-medium">
          <p className="contact-text text-main u-margin-left-right-medium">
            Contacte
          </p>
          <p className="contact-text text-main u-margin-left-right-medium">
            +34 677 838 775
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
      </div>
    </section>
  );
};

export default ContactLanding;
