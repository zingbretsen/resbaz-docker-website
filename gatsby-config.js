module.exports = {
    siteMetadata: {
        name: `Zach Ingbretsen`,
        title: `Intro to Docker`,
        date: `May 2020`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-73216502-2",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: [],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Defers execution of google analytics script after page load
                defer: true,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
            },
        },
        `gatsby-plugin-layout`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `exercises`,
                path: `${__dirname}/src/exercises`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `slides`,
                path: `${__dirname}/src/slides`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-copy-linked-files`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 1920,
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
};
