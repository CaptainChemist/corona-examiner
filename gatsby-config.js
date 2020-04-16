require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Corona Examiner`,
    description: `Track the spread of the novel coronavirus.`,
    author: `@codemochi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GATAG,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
        // defaultDataLayer: function() {
        //   return {
        //     pageType: window.pageType,
        //   }
        // },
        // defaultDataLayer: { platform: 'gatsby' },
        defaultDataLayer: function() {
          return {
            pageType: window.pageType,
            platform: "gatsby",
          }
        },
      },
    },
  ],
  pathPrefix: "/",
}
