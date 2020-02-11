/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Headroom from "react-headroom"

import "./layout.css"
import "semantic-ui-css/semantic.min.css"
import { Container } from "semantic-ui-react"
import TopBar from "../Header"

const Layout = ({ location, children }) => {
  return (
    <>
      <Headroom
        upTolerance={10}
        downTolerance={10}
        style={{ zIndex: "20", height: "8em" }}
      >
        <TopBar location={location} />
      </Headroom>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Container text>{children}</Container>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
