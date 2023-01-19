/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.gitarady-lekcjegitary.pl`,
    author: `Bartosz Zarzycki`
  },

  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gitarady - Nauka Gry na Gitarze i Ukulele`,
        short_name: `Gitarady`,
        start_url: `/`,
        background_color: '#f4f4f4',
        display: 'standalone',
        icon: `src/images/favicon.png`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:300,400`, `Black+Ops+One`, `source sans pro:300,400,400i,700`
        ],
        display: 'swap'
      }
    }, {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_KEY,
        environment: `main`,
        previewMode: false,
        disableLiveReload: false,
        // pageSize: 500
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pl'
      }
    },
  ]
}