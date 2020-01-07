import React from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"

const Header = () => {
  return (
    <nav>
      <Link to="/" activeClassName={styles.active}>
        Blog
      </Link>
      <Link to="/about" activeClassName={styles.active}>
        About
      </Link>
    </nav>
  )
}

export default Header
