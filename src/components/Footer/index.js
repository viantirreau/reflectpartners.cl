import React from "react"
import footerStyles from "../../styles/footer.module.scss"
import { Grid, Divider, Responsive } from "semantic-ui-react"
import FooterLogo from "./FooterLogo"
import { Title, Item, WhiteTitle } from "./LinkList"
import styled from "styled-components"

const ContactLink = styled.a`
  color: #ddd !important;
  padding-left: ${props => (props.centered ? "0" : "0.2em")};
  white-space: nowrap;
  &:hover {
    color: #fff !important;
  }
`

const ProdServ = () => (
  <>
    <Grid.Row>
      <Title title="Productos">
        <Item to="/faces">
          <b>Faces</b> by Reflect
        </Item>
        <Item to="/x">
          <b>X</b> by Reflect
        </Item>
      </Title>
    </Grid.Row>
    <Grid.Row>
      <Title title="Servicios">
        <Item to="/matrimonio">Matrimonios</Item>
        <Item to="/corporativo">Corporativos</Item>
        <Item to="/cumpleanos">Cumpleaños</Item>
        <Item to="/activaciones">Activaciones</Item>
      </Title>
    </Grid.Row>
  </>
)

const Contact = ({ centered }) => (
  <>
    <Title title="Contacto">
      <WhiteTitle as="h3">Llámanos</WhiteTitle>
      <ContactLink centered={centered} href="tel:56986020975">
        +56 9 8602 0975
      </ContactLink>
      <ContactLink centered={centered} href="tel:56986020975">
        +56 9 7379 8987
      </ContactLink>
      <br />
      <WhiteTitle as="h3">Escríbenos</WhiteTitle>
      <ContactLink
        centered={centered}
        href="mailto:contacto@reflectpartners.cl"
      >
        contacto@reflectpartners.cl
      </ContactLink>
    </Title>
  </>
)

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Responsive minWidth={600}>
        <Grid container style={{ maxWidth: "1200px" }}>
          <Grid.Row centered>
            <Grid.Column textAlign="center" computer={6} tablet={6} mobile={16}>
              <FooterLogo />
            </Grid.Column>
            <Grid.Column computer={4} tablet={4} mobile={8}>
              <ProdServ />
            </Grid.Column>
            <Grid.Column computer={5} tablet={5} mobile={8}>
              <Contact />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive maxWidth={599}>
        <Grid container style={{ maxWidth: "1200px" }}>
          <Grid.Row>
            <Grid.Column textAlign="center" mobile={16}>
              <FooterLogo />
            </Grid.Column>
            <Grid.Column mobile={16} textAlign="center">
              <ProdServ />
            </Grid.Column>
            <Grid.Column mobile={16} textAlign="center">
              <Contact centered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <Divider horizontal inverted>
        &copy; Reflect Partners {}
      </Divider>
    </footer>
  )
}

export default Footer
