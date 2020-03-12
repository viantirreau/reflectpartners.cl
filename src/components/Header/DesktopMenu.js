import React from "react"
import { Menu, Container } from "semantic-ui-react"
import MenuLink from "./DesktopMenuLink"
import styled from "styled-components"
import BlackLogo from "../../images/rp-logo-black.svg"
import Cover from "../Transition"

const StyledMenu = styled(({ colored, hidden, ...props }) => (
  <Menu {...props} />
))`
  background-color: ${props =>
    props.colored ? "#ffdb01 !important" : "white !important"};
  padding: 1em 0 1em 0;
  transform: ${props => (props.hidden ? "translateY(-8rem)" : "translateY(0)")};
  transition: ease-in-out 1.2s;
  opacity: ${props => (props.hidden ? "0" : "100%")};
`

class DesktopMenu extends React.Component {
  constructor(props) {
    super(props)
    this.pathname = props.location.pathname
    this.colored = props.colored || true
    if (this.pathname === "/") {
      this.state = { hidden: true }
    } else {
      this.state = { hidden: false }
    }
  }

  componentWillMount() {
    if (this.pathname === "/") {
      setTimeout(() => this.setState({ hidden: false }), 2400)
    }
  }

  render() {
    return (
      <StyledMenu
        size="huge"
        borderless
        colored={this.colored}
        hidden={this.state.hidden}
      >
        <Menu.Menu position="left">
          <Cover bg="#ffdb01" to="/">
            <img
              src={BlackLogo}
              alt="Logo Reflect Partners"
              style={{
                width: "100%",
                maxWidth: "120px",
                marginLeft: "2em",
                marginBottom: 0,
              }}
            ></img>
          </Cover>
        </Menu.Menu>
        <Container textAlign="right">
          <Menu.Menu position="right">
            <Menu.Item>
              <MenuLink
                to="/"
                text="Inicio"
                pathname={this.pathname}
                state={{ disableFirstAnimation: true }}
              />
            </Menu.Item>
            <Menu.Item>
              <MenuLink
                to="/matrimonio"
                text="Matrimonio"
                pathname={this.pathname}
              />
            </Menu.Item>
            <Menu.Item>
              <MenuLink
                to="/corporativo"
                text="Corporativo"
                pathname={this.pathname}
              />
            </Menu.Item>
            <Menu.Item>
              <MenuLink to="/cotiza" text="Cotizar" pathname={this.pathname} />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </StyledMenu>
    )
  }
}

export default DesktopMenu
