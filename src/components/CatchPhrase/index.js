import React from "react"
import styled, { keyframes } from "styled-components"
import { fadeInUp } from "react-animations"

const fadeAnimation = keyframes`${fadeInUp}`

const FadedHeader = styled.h1`
  animation: 1s ${fadeAnimation};
  animation-delay: ${props => props.delay || "1.6"}s;
  -webkit-animation-delay: ${props => props.delay || "1.6"}s;
  padding: 0 1.5rem;
  margin: 0;
  font-size: 6rem;
  &.hidden {
    opacity: 0;
  }
  &.show {
    opacity: 100%;
  }
  && {
    text-align: center;
  }
`

const StyledContainer = styled.div`
  text-align: center;
  height: 100vh;
  margin-top: -6em;
  padding-top: 40vh;
  background: #ffdb01;
  h1 {
    display: ${props => (props.width > 1050 ? "inline-block" : "block")};
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
  }

  componentDidMount() {
    setTimeout(() => this.show({ refleja: "show" }), 2100)
    setTimeout(() => this.show({ tu: "show" }), 2600)
    setTimeout(() => this.show({ alegria: "show" }), 3100)
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth })
  }
  show(obj) {
    this.setState(obj)
  }

  render() {
    return (
      <StyledContainer width={this.state.width}>
        <FadedHeader delay={1.6} className={this.state.refleja}>
          Refleja
        </FadedHeader>
        <FadedHeader delay={2.1} className={this.state.tu}>
          Tu
        </FadedHeader>
        <FadedHeader delay={2.6} className={this.state.alegria}>
          Alegría
        </FadedHeader>
      </StyledContainer>
    )
  }
}

export default CatchPhrase
