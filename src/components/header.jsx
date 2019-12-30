import React from "react"
import { Link } from "gatsby"
import { Icon } from "@iconify/react"
import backspaceOutline from "@iconify/icons-mdi/backspace-outline"
import styles from "../styles/header.module.css"

const icon = {
  marginRight: "10px",
  fontSize: "25px",
  background: "mediumseagreen",
}

const Header = () => (
  <nav>
    <a className={styles.title} href="/">
      <div className={styles.innerNav}>
        <Icon icon={backspaceOutline} style={icon} />
        <h3 className={styles.name}>Harrison Malone</h3>
      </div>
    </a>
    <div className={styles.menu}>
      <h3 className={styles.menuItem}>
        <Link to="/about">About Me</Link>
      </h3>
      <h3 className={styles.menuItem}>
        <Link to="/archive">Archive</Link>
      </h3>
    </div>
  </nav>
)

export default Header
