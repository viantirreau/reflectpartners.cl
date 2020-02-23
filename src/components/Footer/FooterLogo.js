import React from "react"
import Logo from "../../images/rp-logo.svg"
import { Icon } from "semantic-ui-react"
import styled from "styled-components"

const StyledIconContainer = styled.a`
  color: #ffdb01;
  margin: 0.5em;
  &:hover {
    color: #ffe96a;
  }
`

const FooterLogo = () => {
  return (
    <div style={{ paddingBottom: "60px" }}>
      <div>
        <img
          src={Logo}
          alt="Logo Reflect Partners"
          style={{ width: "100%", maxWidth: "250px", marginBottom: 20 }}
        ></img>
      </div>
      <div>
        <StyledIconContainer
          href="https://www.facebook.com/reflectpartners.cl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="facebook" size="big"></Icon>
        </StyledIconContainer>
        <StyledIconContainer
          href="https://www.instagram.com/reflectpartners.cl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" size="big"></Icon>
        </StyledIconContainer>
        <StyledIconContainer href="mailto:contacto@reflectpartners.cl">
          <Icon name="mail" size="big"></Icon>
        </StyledIconContainer>
      </div>
    </div>
  )
}

export default FooterLogo
