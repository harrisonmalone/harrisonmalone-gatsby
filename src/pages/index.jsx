import React from "react"
import Main from "../components/main"
import Articles from "../components/articles"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMarkdownRemark(limit: 10, sort: {fields: id, order: DESC}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
          parent {
            ... on File {
              birthTime(formatString: "DD-MM-YYYY")
            }
          }
        }
      }
    }
  }
`

export default props => {
  return (
    <Layout>
      <Main />
      <Articles data={props.data} />
    </Layout>
  )
}
