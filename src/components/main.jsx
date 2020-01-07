import React from "react"
import styles from "../styles/main.module.css"

const Main = () => {
  return (
    <div>
      <div className={styles.about}>
        <p>Hey, I'm Harrison.</p>
        <p>
          I teach at <a href="https://coderacademy.edu.au/">Coder Academy</a>.
          Here I write about modern JavaScript, Node.js and Ruby.
        </p>
      </div>
    </div>
  )
}

export default Main
