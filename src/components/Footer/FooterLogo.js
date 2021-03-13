import React from "react"
import Logo from "../../images/rp-logo.svg"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const StyledIconContainer = styled.a`
  color: #ffdb01;
  margin: 0.5em;
  &:hover {
    color: #ffe96a;
  }
`

const FooterLogo = () => (
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
        <FontAwesomeIcon icon={faFacebook} size="3x"></FontAwesomeIcon>
      </StyledIconContainer>
      <StyledIconContainer
        href="https://www.instagram.com/reflectpartners.cl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="3x"></FontAwesomeIcon>
      </StyledIconContainer>
      <StyledIconContainer href="mailto:contacto@reflectpartners.cl">
        <FontAwesomeIcon icon={faEnvelope} size="3x"></FontAwesomeIcon>
      </StyledIconContainer>
    </div>
  </div>
)

export default FooterLogo
