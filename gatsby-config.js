module.exports = {
  siteMetadata: {
    siteUrl: `https://www.harrisonmalone.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
              aliases: {
                js: "javascript",
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
