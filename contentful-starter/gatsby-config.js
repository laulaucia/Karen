require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Karen Lamassonne | Artist`,
    description: `Colombian-US artist exhibits works in oil, watercolor and collage from exhibitions in US, Europe and Colombia.`,
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KarenLamassonne`,
        short_name: `KarenLamassonne`,
        start_url: `/`,
        background_color: `#fff5fd`,
        theme_color: `#fff5fd`,
        display: `standalone`,
        icon: `static/Subject.png`, 
      },
    },
  ],
};
