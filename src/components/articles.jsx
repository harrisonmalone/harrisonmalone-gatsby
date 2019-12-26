import React from 'react'
import styles from '../styles/articles.module.css'
import { Link } from 'gatsby'

export default (props) => {
  const articles = props.data.allMarkdownRemark.edges
  return (
    <div className={styles.articles}>
      <div className={styles.articlesTitle}>
        <h2>Latest Articles</h2>
        <div className={styles.viewAllBtn}>
          <p><a href="/archive">View all</a></p>
        </div>
      </div>
      <div className={styles.articlesList}>
        {articles.map((article, index) => {
          const { frontmatter, fields, parent } = article.node
          return (
            <div className={styles.article} key={index}>
                <Link to={fields.slug}>
                  <h4>{frontmatter.title}<span className={styles.date}>{parent.birthTime}</span></h4>
                </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}