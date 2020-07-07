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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const splitDate = edge.node.frontmatter.date.split("-")
                const year = splitDate[0]
                const month = splitDate[1].substring(0, 2)
                return Object.assign({}, edge.node.frontmatter, {
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/${year}/${month}${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/${year}/${month}${edge.node.fields.slug}`,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Harrison Malone",
          },
        ],
      },
    },
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
