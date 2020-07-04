import React from "react"
import articleProcessing from "../utils/article-processing"
import { Link } from "gatsby"
import styles from "../styles/articles.module.css"

const linkDateFormat = (date) => {
  const splitDate = date.split("-")
  return [splitDate[0], splitDate[1]]
}

export default props => {
  let key
  const years = articleProcessing(props)
  console.log(years)
  return (
    <div className={styles.articles}>
      {years.map((year, index) => {
        key = Object.keys(year)[0]
        return (
          <div key={index}>
            <h1 className={styles.year}>{key}</h1>
            {year[key].map((article, index) => {
              const [year, month] = linkDateFormat(article.date)
              return (
                <div className={styles.article} key={index}>
                  <p>
                    <Link to={`/${year}/${month}` + article.slug}>{article.title}</Link>&nbsp;
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
