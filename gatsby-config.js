require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || `production`}`, // Weird that `yarn serve` doesn't set NODE_ENV to production, this is a stopgap
})

const GTM_ORIGIN = 'https://www.googletagmanager.com'

module.exports = {
  pathPrefix: '/demos/rise-of-the-robots',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-transformer-inline-svg',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 90,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'robots',
        path: `${__dirname}/src/robots/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: false,
        host: process.env.CONTENTFUL_HOST,
      },
    },
  ],
  partytownProxiedURLs: [
    `${GTM_ORIGIN}/gtag/js?id=${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}`,
  ],
}
