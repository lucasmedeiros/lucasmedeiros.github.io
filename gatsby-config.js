const siteMetadata = require('./config/metadata');

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
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
        }
    ]
}
