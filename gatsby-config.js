/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const fs = require("fs")
const { buildSchema, buildClientSchema } = require("graphql")

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `FreetoGame`,
        fieldName: `FreetoGame`,
        url: `https://www.freetogame.com/api/games`,
      },
    },
  ],
}
