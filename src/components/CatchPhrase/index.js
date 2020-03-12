import React from "react"
import styled from "styled-components"

const FadedHeader = styled.h1`
  padding: 0 1.5rem;
  margin: 0;
  transition: 1s ease-in-out;
  -moz-transition: 1s ease-in-out;
  -webkit-transition: 1s ease-in-out;
  color: rgba(0, 0, 0, 0.9);
  &.hidden {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  &.show {
    transform: none;
    opacity: 1;
  }
  && {
    text-align: center;
  }
`

const StyledContainer = styled.div`
  text-align: center;
  position: relative;
  height: calc(100vh - 7rem);
  padding-top: 20vh;
  background: #ffdb01;
  h1 {
    display: ${props => (props.width > 1050 ? "inline-block" : "block")};
    font-size: ${props => (props.width > 1050 ? "6rem" : "4.8rem")};
  }
  @media (max-width: 1050px) {
    padding-top: 10vh;
  }
  @media (max-width: 767px) {
    height: 100vh;
    padding-top: 25vh;
  }
`

class CatchPhrase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refleja: "hidden",
      tu: "hidden",
      alegria: "hidden",
      width: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.offset = props.disableFirstAnimation ? 500 : 1000
    this.children = props.children
  }

  componentDidMount() {
    setTimeout(() => this.setState({ refleja: "show" }), this.offset + 500)
    setTimeout(() => this.setState({ tu: "show" }), this.offset + 1000)
    setTimeout(() => this.setState({ alegria: "show" }), this.offset + 1500)
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth })
  }

  render() {
    return (
      <StyledContainer width={this.state.width}>
        <FadedHeader className={this.state.refleja}>Refleja</FadedHeader>
        <FadedHeader className={this.state.tu}>Tu</FadedHeader>
        <FadedHeader className={this.state.alegria}>Alegría</FadedHeader>
        {this.children}
      </StyledContainer>
    )
  }
}

export default CatchPhrase
