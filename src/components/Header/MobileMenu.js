import React from "react"
import { slide as Menu } from "react-burger-menu"
import Cover from "../Transition"
import styled from "styled-components"

const StyledCover = styled(Cover)`
  font-weight: 200;
  font-size: 2em;
  text-transform: uppercase;
  color: #fff !important;
  padding: 0.4em 0;
  &:hover {
    color: #ffdb01 !important;
  }
`

class MobileMenu extends React.Component {
  render() {
    var styles = {
      bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        right: "36px",
        top: "36px",
      },
      bmBurgerBars: {
        background: this.props.hide ? "#00000000" : "#373a47",
        "-webkit-transition": "background-color linear 1s",
        "-ms-transition": "background-color linear 1s",
        transition: "background-color linear 1s",
      },
      bmBurgerBarsHover: {
        background: "#a90000",
      },
      bmCrossButton: {
        height: "24px",
        width: "24px",
      },
      bmCross: {
        background: "#bdc3c7",
      },
      bmMenuWrap: {
        position: "fixed",
        height: "90%",
        marginTop: "10px",
      },
      bmMenu: {
        background: "#373a47",
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
      },
      bmMorphShape: {
        fill: "#373a47",
      },
      bmItemList: {
        color: "#b8b7ad",
        padding: "0.8em",
      },
      bmItem: {
        display: "inline-block",
      },
      bmOverlay: {
        background: "rgba(0,0,0,0.2)",
      },
    }
    return (
      <Menu styles={styles} right outerContainerId={"content"}>
        <StyledCover to="/" state={{ disableFirstAnimation: true }}>
          Inicio
        </StyledCover>
        <StyledCover to="/corporativo">Corporativo</StyledCover>
        <StyledCover to="/matrimonio">Matrimonio</StyledCover>
        <StyledCover to="/equipo">Nosotros</StyledCover>
        <StyledCover to="/cotiza">Cotizar</StyledCover>
      </Menu>
    )
  }
}
export default MobileMenu
