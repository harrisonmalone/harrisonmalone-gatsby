import React from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"

const Header = () => {
  return (
    <nav>
      <Link to="/" activeClassName={styles.active}>
        Blog
      </Link>
      <a href="https://github.com/harrisonmalone" activeClassName={styles.active}>
        Code
      </a>
    </nav>
  )
}

export default Header
