/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "semantic-ui-css/semantic.min.css"
import "./layout.css"
import TopBar from "../Header"
import Footer from "../Footer"

const Layout = ({ location, children, hideMobileMenu }) => {
  return (
    <>
      <TopBar location={location} hideMobileMenu={hideMobileMenu} />
      <div id="content">
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
