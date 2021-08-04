import React from "react"
import Layout from "../components/Layout"
import Spacer from "../components/Spacer"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from "../components/Carousel"
import TextImageHalf from "../components/TextImageHalf"
import { Breadcrumb, Container } from "semantic-ui-react"
import styled from "styled-components"

const StyledBreadcrumb = styled.div`
  @media only screen and (min-width: 768px){
    display: none;
  }
  margin: -1em 0 0 1em;
`

const Matrimonio = ({ location }) => {

  const data = useStaticQuery(graphql`
    query MatrimonioQuery {
      allFile(filter: { relativePath: { regex: "/Matrimonios/i" } }) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
      }
    }
  `)
  const gallery = data.allFile.edges.map((edge, idx) => (
    <GatsbyImage
      image={edge.node.childImageSharp.gatsbyImageData}
      alt="Reflect Partners en acción"
      key={idx}
    />
  ))
  const carousel = <Carousel>{gallery}</Carousel>

  const subheader = (
    <>
      <p>
        Vive una experiencia única con el Espejo Mágico en tu matrimonio.
      </p>
      <p>
        El cotillón, las animaciones, el álbum de recuerdos y la fotografías
        en grupo que podrás tomarte con el espejo, dejarán un recuerdo inolvidable de tu fiesta.
      </p>
    </>
  )

  const breadcrumbSections = [
    { key: 'inicio', content: 'Inicio' },
    { key: 'matrimonio', content: 'Matrimonio', active: true }
  ]



  return (
    <Layout location={location}>
      <Container fluid style={{ paddingTop: "3em" }}>
        <StyledBreadcrumb>
          <Breadcrumb divider='/' sections={breadcrumbSections} />
        </StyledBreadcrumb>
        <Spacer pixels={20} />
        <TextImageHalf header="Una experiencia inolvidable en tu matrimonio"
          text={subheader}
          image={carousel}
          bg="#ffdb01"
        />

      </Container>
    </Layout>
  )
}

export default Matrimonio
