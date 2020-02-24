import React, { useState, useEffect } from "react"
import { Header } from "semantic-ui-react"
import Cover from "../Transition"
import { withPrefix } from "gatsby"
import styled from "styled-components"

const transition = "all 0.3s 0.1s ease-out"
const StyledSpan = styled.span`
  color: #444;
  transition: ${transition};
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 5px;
    width: 0px;
    height: 2px;
    margin: 5px 0 0;
    transition: ${transition};
    transition-duration: 0.25s;
    opacity: 90;
    background-color: black;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
  &:hover,
  &.active {
    color: #222;
    cursor: pointer;
    &:before,
    &:after {
      width: 41%;
      opacity: 1;
    }
  }
`

function DesktopMenuLink({ pathname, to, text, ...props }) {
  const [activeItem, setActiveItem] = useState(pathname)

  useEffect(() => {
    setActiveItem(pathname)
  }, [pathname])
  return (
    <Header as="h2">
      <Cover bg="#ffdb01" to={to} {...props}>
        <StyledSpan className={activeItem === withPrefix(to) ? "active" : ""}>
          {text}
        </StyledSpan>
      </Cover>
    </Header>
  )
}

export default DesktopMenuLink
