import React, { useState, useEffect } from "react"
import { Header } from "semantic-ui-react"
import Cover from "../Transition"
import layoutStyles from "../../styles/topbar.module.scss"
import { withPrefix } from "gatsby"

function DesktopMenuLink({ pathname, to, text, ...props }) {
  const [activeItem, setActiveItem] = useState(pathname)

  useEffect(() => {
    setActiveItem(pathname)
  }, [pathname])
  return (
    <Header as="h2">
      <Cover bg="#ffdb01" to={to} {...props}>
        <span
          className={
            layoutStyles.link +
            (activeItem === withPrefix(to) ? ` ${layoutStyles.active}` : "")
          }
        >
          {text}
        </span>
      </Cover>
    </Header>
  )
}

export default DesktopMenuLink
