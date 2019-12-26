import React from 'react'
import { Helmet } from "react-helmet"
import './layout.css'
import Header from './header'

const Layout = (props) => {
  return (
    <>
      <Helmet>
        <title>Harrison Malone</title>
      </Helmet>
      <div className="container">
        <Header />
        {props.children}
      </div>
    </>
  )
}

export default Layout