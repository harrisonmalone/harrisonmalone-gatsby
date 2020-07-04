import React from "react"
import styles from "./article-layout.module.css"
import { Link } from "gatsby"

const linkDateFormat = (date) => {
  const splitDate = date.split("-")
  return [splitDate[0], splitDate[1]]
}

export default props => {
  const { title, slug, date } = props
  const [year, month] = linkDateFormat(date)
  return (
    <div className={styles.article}>
      <h1>
        { title ? <Link to={`/${year}/${month}` + slug}>{title}</Link> : null}{" "}
      </h1>
      <div style={{ fontSize: "15px", fontWeight: "normal" }}>{date}</div>
      {props.children}
    </div>
  )
}
