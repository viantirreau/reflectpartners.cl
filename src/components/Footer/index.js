import React from "react"
import { Grid, Divider } from "semantic-ui-react"
import FooterLogo from "./FooterLogo"
import { Title, Item, WhiteTitle } from "./LinkList"
import styled from "styled-components"
import { Media, MediaContextProvider } from "../Media"

const ContactLink = styled.a`
  color: #ddd !important;
  padding-left: ${(props) => (props.centered ? "0" : "0.2em")};
  white-space: nowrap;
  &:hover {
    color: #fff !important;
  }
`
const StyledFooter = styled.footer`
  padding: 60px 20px;
  background: #1d2126;
  font-size: 1.2em;
  margin: 2em 0 0 0;
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

const Footer = () => (
  <StyledFooter>
    <MediaContextProvider>
      <Media lessThan="mobileLandscape">
        <Grid container>
          <Grid.Row centered>
            <Grid.Column textAlign="center" width={16}>
              <FooterLogo />
            </Grid.Column>
            <Grid.Column textAlign="center" width={16}>
              <ProdServ />
            </Grid.Column>
            <Grid.Column textAlign="center" width={16}>
              <Contact centered={true} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Media>
      <Media at="mobileLandscape">
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign="center" width={4}>
              <FooterLogo />
            </Grid.Column>
            <Grid.Column textAlign="left" width={4}>
              <ProdServ />
            </Grid.Column>
            <Grid.Column textAlign="left" width={5}>
              <Contact centered={true} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Media>
      <Media greaterThanOrEqual="tablet">
        <Grid container style={{ maxWidth: "1200px" }}>
          <Grid.Row>
            <Grid.Column width={7} textAlign="center">
              <FooterLogo />
            </Grid.Column>
            <Grid.Column width={4} textAlign="left">
              <ProdServ />
            </Grid.Column>
            <Grid.Column width={5} textAlign="left">
              <Contact centered={false} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Media>

      <Divider horizontal inverted>
        &copy; Reflect Partners
      </Divider>
    </MediaContextProvider>
  </StyledFooter>
)

export default Footer
