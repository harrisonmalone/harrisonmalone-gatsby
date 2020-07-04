import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ArticleLayout from "../components/article-layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
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
    }
  }
`

const BlogPost = props => {
  const { frontmatter, fields, html } = props.data.markdownRemark
  return (
    <Layout>
      <>
        <ArticleLayout
          title={frontmatter.title}
          slug={fields.slug}
          date={frontmatter.date}
        >
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </ArticleLayout>
      </>
    </Layout>
  )
}

export default BlogPost
