import React from 'react'
import styled from "styled-components"
import Cover from "../Transition"


const StyledButton = styled.div`
    background-color: #FFDB01;
    border-radius: 4rem;
    max-width: 16rem;
    text-align: center;
    padding: 1rem 2rem;
    cursor: pointer;
    margin: 2rem auto 0 auto;

    &:hover {
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        background-color: #FFDB21;
    }

`

const StyledLink = styled(Cover)`
  color: #3d3d3d;
  font-weight: 800;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  user-select: none;
  &:hover {
    color: #3d3d3d;
  }
`

const PillButton = ({ text, link }) => {
    const finalText = text || "COTIZAR"
    return (
        <StyledButton>
            <StyledLink to={link}>
                {finalText}
            </StyledLink>
        </StyledButton>
    )
}

export default PillButton
