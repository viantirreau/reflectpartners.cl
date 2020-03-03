import React from "react"
import EmblaCarousel from "./EmblaCarousel"
import styled from "styled-components"

const StyledContent = styled.div`
  padding-bottom: 2rem;
  max-width: 80rem;
  width: 100%;
`

const Carousel = ({ children }) => (
  <>
    <StyledContent>
      <EmblaCarousel autoplay delayLength={5000}>
        {children}
      </EmblaCarousel>
    </StyledContent>
  </>
)

export default Carousel
