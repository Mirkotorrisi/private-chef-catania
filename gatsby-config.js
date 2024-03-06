require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const CITY = process.env.CITY;
const uppercaseCity =
  CITY?.charAt?.(0).toLocaleUpperCase() + CITY?.substring(1);

module.exports = {
  siteMetadata: {
    siteUrl: `https://privatechef${CITY}.com`,
    title: `Private Chef ${uppercaseCity}`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    "gatsby-plugin-next-seo",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `https://privatechef${CITY}.com`,
        sitemap: `https://privatechef${CITY}.com/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/favicon/favicon.png",
        background_color: `#ed7568`,
        theme_color: `#ed7568`,
        name: `Private Chef ${uppercaseCity}`,
        short_name: `Private Chef ${uppercaseCity}`,
        description: `Your in home chef in Sicily. High quality food and beverage experiences. Wine tasting, Cooking class, catering. Try you restaurant at home.`,
        lang: `en`,
        display: `standalone`,
        start_url: `/`,
      },
    },
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeIds: ["ChIJi7oI6UT9ExMRmBE2I9R2GS4"],
        apiKey: process.env.GOOGLE_API_KEY,
        language: "en-US", // optional, defaults to en-US
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        develop: false,
      },
    },
  ],
};
