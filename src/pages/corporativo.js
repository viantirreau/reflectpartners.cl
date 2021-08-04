import React from "react"
import Layout from "../components/Layout"
import Spacer from "../components/Spacer"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from "../components/Carousel"
import TextImageHalf from "../components/TextImageHalf"
import PillButton from "../components/PillButton"
import { Breadcrumb, Container } from "semantic-ui-react"
import styled from "styled-components"

const StyledBreadcrumb = styled.div`
  @media only screen and (min-width: 768px){
    display: none;
  }
  margin: -1em 0 0 1em;
`
const Corporativo = ({ location }) => {
  const data = useStaticQuery(graphql`
    query CorporativoQuery {
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
        El Espejo Mágico de ReflectPartners elevará al siguiente nivel la producción de tu evento.
        Fiestas, activaciones, simposios, eventos de cierre de año, fidelizaciones y lanzamientos
        de productos encajan perfectamente con el diseño y la ambientación sobria, lujosa y llamativa del Espejo.

      </p>
      <p>
        Envía instantáneamente de manera digital las fotografías a los invitados, imprime a demanda y entrégale
        entrención a tus invitados con el cotillón premium, para que tu evento se escape de la tradición.
      </p>
      <PillButton link="/cotiza" />
    </>
  )

  const breadcrumbSections = [
    { key: 'inicio', content: 'Inicio' },
    { key: 'coroporativo', content: 'Corporativo', active: true }
  ]



  return (
    <Layout location={location}>
      <Container style={{ paddingTop: "4em" }}>
        <StyledBreadcrumb>
          <Breadcrumb divider='/' sections={breadcrumbSections} />
        </StyledBreadcrumb>
        <Spacer pixels={20} />
        <TextImageHalf header="Lleva tus eventos corporativos a otro nivel"
          text={subheader}
          image={carousel}
          vertical={true}
          reversed={true}
          bg="#ffdb01"
        />
      </Container>
    </Layout>
  )
}

export default Corporativo
