import React from "react"
import { Grid, Header } from "semantic-ui-react"
import styled from "styled-components"

const StyledTextContainer = styled.div`
  padding: ${(props) => props.padding || "0 0 0 10%"};
`
const StyledImageContainer = styled.div`
  padding: ${(props) => props.vertical ? "5% 2.5% 0% 2.5%" : "5% 4% 0% 4%"};
  width: ${(props) => props.vertical ? "50%" : "auto"};
  @media only screen and (max-width: 768px){
    margin-top: 5%;
    width: ${(props) => props.vertical ? "100%" : "auto"};
  }
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
padding-top: 1em !important;
  &&&& {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 500;
    font-size: calc(${(props) => props.size || "0.65em"} + 0.3vw);
  }
`

const TextHalf = ({
  vertical,
  secondarySize,
  header,
  text
}) => (
  <StyledTextContainer padding={vertical ? "0 10%" : "0 0 0 8%"}>
    <StyledHeader align="left">
      {header}
      <StyledSubHeader size={secondarySize}>{text}</StyledSubHeader>
    </StyledHeader>
  </StyledTextContainer>
)

const TextImageHalf = ({
  header,
  text,
  image,
  pillButton,
  bg,
  reversed,
  vertical,
  secondarySize,
}) => {
  let textPortion = (
    <TextHalf vertical={vertical} secondarySize={secondarySize} header={header} text={text} />
  )

  let imagePortion = (
    <StyledImageContainer vertical={vertical} bg={bg || "none"}>{image}</StyledImageContainer>
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
          {reversed ? (
            <>
              <Grid.Row>{textPortion}</Grid.Row>
              <Grid.Row centered>{imagePortion}</Grid.Row>
              <Grid.Row centered>{pillButton}</Grid.Row>

            </>
          ) : (
            <>
              <Grid.Row centered>{imagePortion}</Grid.Row>
              <Grid.Row>{textPortion}</Grid.Row>
              <Grid.Row centered>{pillButton}</Grid.Row>
            </>
          )}
        </>
      ) : (
        <>
          <Grid.Column><>
            {textPortion}
            {pillButton}
          </>
          </Grid.Column>

          <Grid.Column>{imagePortion}</Grid.Column>
        </>
      )}
    </Grid>
  )
}

export { TextImageHalf, TextHalf }
