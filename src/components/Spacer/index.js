import React from "react"
import { Media, MediaContextProvider } from "../Media"

const Spacer = ({ pixels }) => {
  return (
    <>
      <MediaContextProvider>
        <Media lessThan="mobileLandscape">
          <div style={{ paddingTop: pixels }}></div>
        </Media>
        <Media greaterThanOrEqual="mobileLandscape">
          <div style={{ paddingTop: 2 * pixels }}></div>
        </Media>
      </MediaContextProvider>
    </>
  )
}

export default Spacer
