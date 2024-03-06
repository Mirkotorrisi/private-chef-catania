export const CITY = process.env.GATSBY_CITY;
export const uppercaseCity = CITY
  ? CITY.charAt(0).toUpperCase() + CITY.substring(1)
  : "";

const menu = [
  {
    name: "Il Panaro",
    image: "basket",
    description:
      "Cestino di riso carnaroli allo zafferano, sugo di vitello con carote sedano e piselli, fonduta di provola dolce e pasta kataifa crispy",
  },
  {
    name: "Pitrudda da Trizza",
    image: "pitrudda",
    description:
      "Crispella di cavolfiore bianco, mousse di sedano rapa con olio all'aglio, acqua di barbabietola e germogli di bieta",
  },
  {
    name: "Autunno nei nebrodi",
    image: "nebrodi",
    description:
      "Carpaccio di wagyu, gel di cetriolo, spinacino al burro, piccadilly confit, salsa al parmiggiano reggiano 48 mesi e tuorlo di quaglia",
  },
  {
    name: "Raw clorofilla",
    image: "battuta",
    description:
      "Battuta di fassona, clorofilla di rucola solida, crackers di mais, pickled cipolla giarratana e nocciole tostate",
  },
  {
    name: "Pendici dell'Etna",
    image: "pendici",
    description:
      "Risotto carnaroli all'onda, salsa ai porcini, riduzione di mirtilli rossi e crumble di guanciale Sant'Angelo di Brolo",
  },
  {
    name: "Chocolate horse",
    image: "filetto",
    description:
      "Filetto di cavallo medium rare, chips con frolla di mais salata, coulis di more, scaglie di cioccolato fondente 90% e acqua di ragusano dop stagionato",
  },
];

const PHONE_NUMBER = "tel:+393276163861";
const PHONE_NUMBER_CLEAN = "+393276163861";
const GOOGLE =
  "https://www.google.com/maps/place/Private+Chef+Catania/@37.5562798,15.0886681,15z/data=!4m5!3m4!1s0x0:0x2e1976d423361198!8m2!3d37.5562798!4d15.0886681";
const FACEBOOK = "https://www.facebook.com/PrivateChefCatania";
const INSTAGRAM = "https://www.instagram.com/privatechefcatania/";
const WHATSAPP = "https://wa.me/393276163861";
const EMAIL = "mailto:s.privatechefcatania@gmail.com";

export {
  EMAIL,
  FACEBOOK,
  GOOGLE,
  INSTAGRAM,
  PHONE_NUMBER,
  PHONE_NUMBER_CLEAN,
  WHATSAPP,
  menu,
};
