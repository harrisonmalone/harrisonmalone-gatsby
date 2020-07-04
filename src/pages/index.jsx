import React from "react"
import Main from "../components/main"
import Articles from "../components/articles"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
          html
          parent {
            ... on File {
              birthTime(formatString: "YYYY-MM-DD")
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
