import React from "react"
import { Grid, Header } from "semantic-ui-react"
import Img from "gatsby-image"
import styled from "styled-components"
import Spacer from "../Spacer"

const StyledTextContainer = styled.div`
  padding-left: 10%;
`
const StyledImageContainer = styled.div`
  padding: 10%;
  background-color: ${props => props.bg || "#ffdb01"};
`
const StyledHeader = styled(Header)`
  &&& {
    font-size: calc(3em + 1vw);
    font-weight: 800;
    font-family: "Lato Black";
  }
`
const StyledSubHeader = styled(Header.Subheader)`
  &&&& {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    font-size: calc(0.4em + 0.3vw);
  }
`

const TextImageHalf = ({ header, text, image, bg }) => {
  return (
    <Grid columns={2} stackable reversed>
      <Grid.Column>
        <StyledTextContainer>
          <StyledHeader>
            {header}
            <Spacer pixels={10} />
            <StyledSubHeader>{text}</StyledSubHeader>
          </StyledHeader>
        </StyledTextContainer>
      </Grid.Column>
      <Grid.Column>
        <StyledImageContainer bg={bg}>
          <Img fluid={image} alt={header} />
        </StyledImageContainer>
      </Grid.Column>
    </Grid>
  )
}

export default TextImageHalf
