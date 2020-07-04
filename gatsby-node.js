const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            parent {
              ... on File {
                id
                name
                birthTime(formatString: "YYYY-MM-DD")
              }
            }
            frontmatter {
              date
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const date = node.frontmatter.date.split("-")
    const [year, month] = date
    createPage({
      path: `/${year}/${month}` + node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.jsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
