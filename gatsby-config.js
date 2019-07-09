module.exports = {
    siteMetadata: {
        title: `Choose A Browser`,
        description: `Non-judgmental guidance on choosing your next web browser.`,
        author: `EnKrypt, Harshal Bhatia`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Choose A Browser`,
                short_name: `chooseabrowser.com`,
                start_url: `/`,
                background_color: "#303038",
                theme_color: "#204000",
                display: `standalone`,
                // icon: `assets/images/gatsby-icon.png`,
            },
        },
    ],
};
