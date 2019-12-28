import React from "react"
import styles from "../styles/main.module.css"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.shortAbout}>
          <h1>Hey, I'm Harrison</h1>
          <h5>
            I teach at{" "}
            <Link to="https://coderacademy.edu.au/">Coder Academy</Link>. I also
            write about modern JavaScript, Node.js and Ruby.
          </h5>
        </div>
      </div>
    </div>
  )
}
