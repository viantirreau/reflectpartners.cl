import React from "react"
import { Responsive } from "semantic-ui-react"

const Spacer = ({ pixels }) => {
  return (
    <>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <div style={{ paddingTop: pixels }}></div>
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <div style={{ paddingTop: 2 * pixels }}></div>
      </Responsive>
    </>
  )
}

export default Spacer
