import { useTranslation } from "react-i18next";

import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ContactLanding = () => {
  const { t } = useTranslation(["common"]);
  return (
    <section className="contact u-padding-medium">
      <h2 className="heading-secundary u-padding-top-bottom-medium">
        {t("contact")}
      </h2>
      <article className="contact-content">
        <div className="contact-block contact-block--info u-padding-top-medium">
          <div>
            <p className="contact-text text-main u-bold">{t("address")}</p>
            <p className="contact-text text-main">
              Paseo marítimo 201, 08860 – Castelldefels (Barcelona)
            </p>
            <p className="contact-text text-main u-bold u-padding-top-medium">
              {t("contact")}
            </p>
            <p className="contact-text text-main">+34 657 099 946</p>
          </div>
          <div className="contact__social-media contact__social-media--desktop">
            <a href="https://instagram.com/selvatica.arboricultura?igshid=MzRlODBiNWFlZA==">
              <InstagramIcon fontSize="inherit" color="inherit" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=selvatica.arboricultura@gmail.com">
              <MailOutlineIcon fontSize="inherit" color="inherit" />
            </a>
          </div>
        </div>
        <div className="contact-block contact-block--map  u-padding-top-medium">
          <div className="contact-block__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.9714328266955!2d1.9706910999999998!3d41.2659579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc59d44af6e7b7c5%3A0xc6d963dee88c1e54!2sSelv%C3%A0tica!5e0!3m2!1ses!2ses!4v1684346873543!5m2!1ses!2ses"
              width="300"
              height="400"
              frameBorder="0"
              title="maps google addresse"
            />
          </div>
        </div>
        <div className="contact__social-media contact__social-media--mobile">
          <a href="https://instagram.com/selvatica.arboricultura?igshid=MzRlODBiNWFlZA==">
            <InstagramIcon fontSize="inherit" color="inherit" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=selvatica.arboricultura@gmail.com">
            <MailOutlineIcon fontSize="inherit" color="inherit" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default ContactLanding;
