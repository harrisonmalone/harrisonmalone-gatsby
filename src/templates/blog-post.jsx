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
      }
      fields {
        slug
      }
    }
  }
`

const BlogPost = props => {
  const { frontmatter, fields, html } = props.data.markdownRemark
  return (
    <Layout>
      <>
        <ArticleLayout title={frontmatter.title} slug={fields.slug}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </ArticleLayout>
      </>
    </Layout>
  )
}

export default BlogPost
