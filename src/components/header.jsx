import React from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"

const Header = () => {
  return (
    <nav>
      <Link to="/" activeClassName={styles.active}>
        Blog
      </Link>
      <Link to="/me" activeClassName={styles.active}>
        Me
      </Link>
    </nav>
  )
}

export default Header
