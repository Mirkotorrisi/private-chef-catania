import * as React from "react";
import { PHONE_NUMBER } from "../../resources/index";
import "./index.scss";
import LogoWhite from "../../../public/static/svg/logowhite_notext.svg";
const About = () => (
  <div className="about pb-44">
    <h1 className="about__title mt-20 mb-20">About</h1>

    <div className="about__container">
      <p className="about__bio">
        <img
          src="../../../images/fusione.png"
          alt="fabio simone"
          className="about__pic"
        />
        Sono nato a Catania, fra le pendici dell'Etna e le coste della Sicilia
        orientale, luogo d'origine di molteplici tradizioni culinarie ispirate
        dal connubio fra terra e mare. La mia passione nasce tra i fornelli di
        casa, durante la preparazione di pranzi domenicali in famiglia,
        utilizzando ingredienti provenienti da ogni parte della Sicilia. Quegli
        stessi aromi, gradevoli al naso e al palato, continuano ad essere fonte
        d'ispirazione, sia per ritrovare gli antichi sapori sia per reinventarmi
        in nuove pietanze. Ho avuto la fortuna di poter ampliare le mie
        conoscenze anche fuori dal mio paese, tra le migliori cucine francesi e
        inglesi. Conoscendo gli amati sapori natii e quelli del resto del mondo
        che mi hanno incuriosito sono riuscito ad inventare menù pronti a
        soddisfare qualsiasi palato. Il mio obiettivo è soddisfare questi
        palati, nell'intimità di casa, dando origine per Voi al concetto di
        "ristorante" a domicilio!
      </p>
    </div>
  </div>
);

export default About;