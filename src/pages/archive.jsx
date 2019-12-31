import React from "react"
import Layout from "../components/layout"
import ArticleLayout from "../components/article-layout"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styles from "../styles/archive.module.css"

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
          }
          parent {
            ... on File {
              id
              name
              birthTime(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    }
  }
`

export default props => {
  const articles = props.data.allMarkdownRemark.edges.sort((a, b) => Date.parse(b.node.parent.birthTime) - Date.parse(a.node.parent.birthTime))
  return (
    <Layout>
      <ArticleLayout>
        <h1>
          Archive{" "}
          <span className={styles.totalCount}>
            {props.data.allMarkdownRemark.totalCount}
          </span>
        </h1>
        <ul>
          {articles.map((article, index) => {
            const { frontmatter, fields, parent } = article.node
            return (
              <li key={index}>
                <Link to={fields.slug}>{frontmatter.title}</Link>
                &nbsp;
                <span className={styles.totalCount}>{parent.birthTime}</span>
              </li>
            )
          })}
        </ul>
      </ArticleLayout>
    </Layout>
  )
}
