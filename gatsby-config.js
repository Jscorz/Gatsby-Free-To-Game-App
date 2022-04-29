/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
// const fs = require("fs")
// const { buildSchema, buildClientSchema } = require("graphql")

module.exports = {
  siteMetadata: {
    title: "Free Gamer",
    description: "Free PC and Web Games",
    author: "Justin Scorzafava",
    url: `https://jscorz-freegamer.netlify.app/`,
    image: `/free-gamer.png`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    //working example(original)

    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `example`,
        fieldName: `example`,
        url: `https://www.freetogame.com/api/games`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
