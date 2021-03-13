import React from "react"
import { Grid, Header } from "semantic-ui-react"
import styled from "styled-components"
import Spacer from "../Spacer"

const StyledTextContainer = styled.div`
  padding: ${(props) => props.padding || "0 0 0 10%"};
`
const StyledImageContainer = styled.div`
  padding: 10%;
  background-color: ${(props) => props.bg || "#ffdb01"};
`
const StyledHeader = styled(Header)`
  &&& {
    font-size: calc(1.8em + 1.3vw);
    font-weight: 900;
    font-family: "Lato";
    text-align: ${(props) => props.align || "left"};
  }
`
const StyledSubHeader = styled(Header.Subheader)`
  &&&& {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 500;
    font-size: calc(${(props) => props.size || "0.65em"} + 0.3vw);
  }
`

const TextImageHalf = ({
  header,
  text,
  image,
  bg,
  reversed,
  vertical,
  secondarySize,
}) => {
  let textPortion = (
    <StyledTextContainer padding={vertical ? "0 10%" : "0 0 0 10%"}>
      <StyledHeader align={vertical ? "center" : "left"}>
        {header}
        <Spacer pixels={10} />
        <StyledSubHeader size={secondarySize}>{text}</StyledSubHeader>
      </StyledHeader>
    </StyledTextContainer>
  )

  let imagePortion = (
    <StyledImageContainer bg={bg || "none"}>{image}</StyledImageContainer>
  )

  return (
    <Grid
      rows={vertical ? 2 : 1}
      columns={vertical ? 1 : 2}
      stackable
      reversed={reversed}
    >
      {vertical ? (
        <>
          <Grid.Row>{imagePortion}</Grid.Row>
          <Grid.Row>{textPortion}</Grid.Row>
        </>
      ) : (
        <>
          <Grid.Column>{textPortion}</Grid.Column>
          <Grid.Column>{imagePortion}</Grid.Column>
        </>
      )}
    </Grid>
  )
}

export default TextImageHalf
