import React from "react"
import styles from "./article-layout.module.css"
import { Link } from "gatsby"

export default props => {
  const { title, slug, date } = props
  return (
    <div className={styles.article}>
      <h1>
        { title ? <Link to={slug}>{title}</Link> : null}{" "}
        <span style={{ fontSize: "15px", fontWeight: "normal" }}>{date}</span>
      </h1>
      {props.children}
    </div>
  )
}
