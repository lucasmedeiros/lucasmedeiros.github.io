require('dotenv').config();
const siteMetadata = require('./config/metadata');

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#7159c1`,
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Oswald`,
                        subsets: [`latin`],
                    },
                    {
                        family: `Open Sans`,
                        variants: [`400`, `700`]
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: process.env.NODE_ENV !== 'production'
            },
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/pages`,
                ignore: [`**/styles.js`]
            },
        },
        {
            resolve: `gatsby-source-cosmicjs`,
            options: {
                bucketSlug: process.env.COSMIC_BUCKET_SLUG,
                objectTypes: [`pages`, `people`, `services`, `projects`, `settings`, `connects`, `skills`, `clients`, `contacts`],
                apiAccess: {
                    read_key: process.env.COSMIC_READ_KEY,
                }
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                javascriptEnabled: true,
            }
        },
    ]
}
