import React from "react"
import styled from "styled-components"

const AnimatedArrow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 1em;
  display: block;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  text-shadow: 0;
  width: 19px;
  height: 19px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.9);
  border-right: 3px solid rgba(0, 0, 0, 0.9);
  text-align: center;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
  -webkit-animation: fade_move_down 2s ease-in-out infinite;
  -moz-animation: fade_move_down 2s ease-in-out infinite;
  animation: fade_move_down 2s ease-in-out infinite;
  -webkit-animation-delay: 4s;
  -moz-animation-delay: 4s;
  animation-delay: 4s;
  opacity: 0;
  padding: 0.6em;
  &:hover {
    cursor: pointer;
  }

  /*animated scroll arrow animation*/
  @-webkit-keyframes fade_move_down {
    0% {
      -webkit-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
  @-moz-keyframes fade_move_down {
    0% {
      -moz-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
  @keyframes fade_move_down {
    0% {
      transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
`

const DownArrow = props => {
  return <AnimatedArrow onClick={props.handleClick} />
}

export default DownArrow
