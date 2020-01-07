import React from "react"
import styles from "./article-layout.module.css"
import { Link } from "gatsby"

export default props => {
  const { title, slug, date } = props
  console.log(date)
  return (
    <div className={styles.article}>
      <h1>
        {slug ? <Link to={slug}>{title}</Link> : null}{" "}
        <span style={{ fontSize: "15px", fontWeight: "normal" }}>{date}</span>
      </h1>
      {props.children}
    </div>
  )
}
