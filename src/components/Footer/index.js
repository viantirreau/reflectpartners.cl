import React from "react"
import { Grid, Divider, Responsive } from "semantic-ui-react"
import FooterLogo from "./FooterLogo"
import { Title, Item, WhiteTitle } from "./LinkList"
import styled from "styled-components"

const getWidth = () => {
  const isSSR = typeof window === "undefined"

  return isSSR ? Responsive.onlyComputer.minWidth : window.innerWidth
}

const ContactLink = styled.a`
  color: #ddd !important;
  padding-left: ${props => (props.centered ? "0" : "0.2em")};
  white-space: nowrap;
  &:hover {
    color: #fff !important;
  }
`
const StyledFooter = styled.footer`
  padding: 60px 20px;
  background: #1d2126;
  font-size: 1.2em;
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

class Footer extends React.Component {
  state = {}
  handleOnUpdate = (e, { width }) => this.setState({ width })
  render() {
    const { width } = this.state
    const textAlign = width >= 600 ? "left" : "center"
    const mobile = width >= 600 ? 8 : 16
    const centered = width < 600
    return (
      <StyledFooter>
        <Responsive
          fireOnMount
          onUpdate={this.handleOnUpdate}
          getWidth={getWidth}
        >
          <Grid container style={{ maxWidth: "1200px" }}>
            <Grid.Row centered>
              <Grid.Column
                textAlign="center"
                computer={6}
                tablet={6}
                mobile={16}
              >
                <FooterLogo />
              </Grid.Column>
              <Grid.Column
                computer={4}
                tablet={4}
                mobile={mobile}
                textAlign={textAlign}
              >
                <ProdServ />
              </Grid.Column>
              <Grid.Column
                computer={5}
                tablet={5}
                mobile={mobile}
                textAlign={textAlign}
              >
                <Contact centered={centered} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Divider horizontal inverted>
          &copy; Reflect Partners {}
        </Divider>
      </StyledFooter>
    )
  }
}

export default Footer
