import React from "react"
import Logo from "../../images/rp-logo.svg"
import { Icon } from "semantic-ui-react"
import footerStyles from "../../styles/footer.module.scss"

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
        <a
          href="https://www.facebook.com/reflectpartners.cl/"
          className={footerStyles.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="facebook" size="big"></Icon>
        </a>
        <a
          href="https://www.instagram.com/reflectpartners.cl/"
          className={footerStyles.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" size="big"></Icon>
        </a>
        <a
          href="mailto:contacto@reflectpartners.cl"
          className={footerStyles.icon}
        >
          <Icon name="mail" size="big"></Icon>
        </a>
      </div>
    </div>
  )
}

export default FooterLogo
