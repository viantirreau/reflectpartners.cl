import React from "react"
import { Menu, Container } from "semantic-ui-react"
import MenuLink from "./DesktopMenuLink"
import BarStyles from "../../styles/topbar.module.scss"

const DesktopMenu = ({ location: { pathname }, colored = true }) => {
  return (
    <Menu size="huge" borderless className={colored ? BarStyles.topbar : ""}>
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
    </Menu>
  )
}

export default DesktopMenu
