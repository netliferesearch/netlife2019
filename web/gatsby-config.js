// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
});

const clientConfig = require('./client-config');

// const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    siteUrl: 'https://netlife.com',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true // Enable tailwindcss support
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://netlife.com',
        sitemap: 'https://netlife.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
};
