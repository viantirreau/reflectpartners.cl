import React from "react"
import styled from "styled-components"

const Circle = styled.div`
  & {
    background-color: ${(props) => props.background};
    border-radius: 50%;
    height: "90%";
    width: "90%";
    vertical-align: middle;
    text-align: center;
    display: table-cell;
  }
`

const ImageCircle = ({ background, image }) => (
  <Circle background={background}>{image}</Circle>
)

export default ImageCircle
