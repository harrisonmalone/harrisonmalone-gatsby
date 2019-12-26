import React from 'react'
import styles from './article-layout.module.css'
import { Link } from 'gatsby'

export default (props) => {
  const { title, slug } = props
  return (
    <div className={styles.article}>
      <h1>
        {slug ? <Link to={slug}>{title}</Link> : null}
      </h1>
      {props.children}
    </div>
  )
}