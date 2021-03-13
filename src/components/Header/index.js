import React from "react"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import Headroom from "react-headroom"
import { Media, MediaContextProvider } from "../Media"

// const isSSR = typeof window === "undefined"

const Header = ({ location, hideMobileMenu }) => {
  // const Desktop = isSSR ? (
  //   ""
  // ) : (
  //   <Headroom upTolerance={20} style={{ background: "#ffdb01" }}>
  //     <DesktopMenu location={location} />
  //   </Headroom>
  // )

  // const Mobile = isSSR ? (
  //   ""
  // ) : (
  //   <MobileMenu location={location} hide={hideMobileMenu} />
  // )

  return (
    <>
      <MediaContextProvider>
        <Media lessThan="tablet">
          <MobileMenu location={location} hide={hideMobileMenu} />
        </Media>
        <Media greaterThanOrEqual="tablet">
          <Headroom upTolerance={20} style={{ background: "#ffdb01" }}>
            <DesktopMenu location={location} />
          </Headroom>
        </Media>
      </MediaContextProvider>
    </>
  )
}

export default Header
