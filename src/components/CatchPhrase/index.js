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

  color: rgba(0, 0, 0, 0.9);
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
  height: ${props => (props.width > 1050 ? "100vh" : "125vh")};
  margin-top: -6em;
  padding-top: 40vh;
  background: #ffdb01;
  h1 {
    display: ${props => (props.width > 1050 ? "inline-block" : "block")};
    font-size: ${props => (props.width > 1050 ? "6rem" : "4.8rem")};
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
    this.offset = props.disableFirstAnimation ? 10 : 2000
  }

  componentDidMount() {
    setTimeout(() => this.show({ refleja: "show" }), this.offset + 500)
    setTimeout(() => this.show({ tu: "show" }), this.offset + 1000)
    setTimeout(() => this.show({ alegria: "show" }), this.offset + 1500)
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
        <FadedHeader delay={this.offset / 1000} className={this.state.refleja}>
          Refleja
        </FadedHeader>
        <FadedHeader delay={this.offset / 1000 + 0.5} className={this.state.tu}>
          Tu
        </FadedHeader>
        <FadedHeader
          delay={this.offset / 1000 + 1}
          className={this.state.alegria}
        >
          Alegría
        </FadedHeader>
      </StyledContainer>
    )
  }
}

export default CatchPhrase
