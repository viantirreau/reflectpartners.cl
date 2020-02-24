import React from "react"
import { Menu, Container } from "semantic-ui-react"
import MenuLink from "./DesktopMenuLink"
import styled from "styled-components"

const StyledMenu = styled(({ colored, ...props }) => <Menu {...props} />)`
  background-color: ${props => (props.colored ? "#ffdb01 !important" : "")};
  padding: 1em 0 1em 0;
`

const DesktopMenu = ({ location: { pathname }, colored = true }) => {
  return (
    <StyledMenu size="huge" borderless colored={colored}>
      <Container text>
        <Menu.Item header>
          <MenuLink
            to="/"
            text="Inicio"
            pathname={pathname}
            state={{ disableFirstAnimation: true }}
          />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <MenuLink to="/page-2" text="Segunda página" pathname={pathname} />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </StyledMenu>
  )
}

export default DesktopMenu
