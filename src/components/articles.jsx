import React from "react"
import articleProcessing from "../utils/article-processing"
import { Link } from "gatsby"
import styles from "../styles/articles.module.css"

export default props => {
  let key
  const years = articleProcessing(props)
  return (
    <div className={styles.articles}>
      {years.map((year, index) => {
        key = Object.keys(year)[0]
        return (
          <div key={index}>
            <h1 className={styles.year}>{key}</h1>
            {year[key].map((article, index) => {
              return (
                <div className={styles.article} key={index}>
                  <p>
                    <Link to={article.slug}>{article.title}</Link>&nbsp;
                    <span style={{ fontSize: "15px" }}>
                      {article.shortDate}
                    </span>
                  </p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
