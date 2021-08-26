import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from "../components/Carousel"
import { TextImageHalf } from "../components/TextImageHalf"
import PillButton from "../components/PillButton"
import { Container, GridRow } from "semantic-ui-react"
import RPBreadcrumb from "../components/Breadcrumb"
import CompanyLogos from "../components/CompanyLogos"


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
        Fiestas, activaciones, simposios, eventos de cierre de año, fidelizaciones y lanzamientos
        de productos encajan perfectamente con el diseño y la ambientación sobria, lujosa y llamativa del Espejo.

      </p>
      <p>
        Envía instantáneamente de manera digital las fotografías a los invitados, imprime a demanda y entrégale
        entrención a tus invitados con el cotillón premium, para que tu evento se escape de la tradición.
      </p>
    </>
  )

  const breadcrumbSections = [
    { key: 'inicio', content: 'Inicio' },
    { key: 'coroporativo', content: 'Corporativo', active: true }
  ]



  return (
    <Layout location={location}>
      <Container fluid style={{ paddingTop: "3em" }}>
        <RPBreadcrumb sections={breadcrumbSections} />
        <TextImageHalf header="Lleva tus eventos corporativos a otro nivel"
          text={subheader}
          image={carousel}
          vertical={true}
          reversed={true}
          pillButton={<PillButton link="/cotiza" />}
          bg="#ffdb01"
        />
        <GridRow textAlign="right">
          <CompanyLogos />
        </GridRow>
      </Container>
    </Layout>
  )
}

export default Corporativo
