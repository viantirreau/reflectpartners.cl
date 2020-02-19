import React from "react"
import { Responsive } from "semantic-ui-react"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import Headroom from "react-headroom"

const Header = ({ location }) => {
  return (
    <>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <MobileMenu location={location} />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Headroom>
          <DesktopMenu location={location} />
        </Headroom>
      </Responsive>
    </>
  )
}

export default Header
