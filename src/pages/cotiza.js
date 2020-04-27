import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import { Container } from "semantic-ui-react"

const Cotiza = ({ location }) => {
  return (
    <Layout location={location}>
      <Container style={{ paddingTop: "6em" }}>
        <ContactForm></ContactForm>
      </Container>
    </Layout>
  )
}

export default Cotiza
