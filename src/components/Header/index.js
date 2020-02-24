import React from "react"
import { Responsive } from "semantic-ui-react"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import Headroom from "react-headroom"

const isSSR = typeof window === "undefined"
const getWidth = () => {
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const Header = ({ location }) => {
  const Desktop = isSSR ? (
    ""
  ) : (
    <Headroom upTolerance={20}>
      <DesktopMenu location={location} />
    </Headroom>
  )
  const Mobile = isSSR ? "" : <MobileMenu location={location} />
  return (
    <>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth} getWidth={getWidth}>
        {Mobile}
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth} getWidth={getWidth}>
        {Desktop}
      </Responsive>
    </>
  )
}

export default Header
