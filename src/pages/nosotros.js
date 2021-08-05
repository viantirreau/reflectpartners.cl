import React from "react"
import Layout from "../components/Layout"
import RPBreadcrumb from "../components/Breadcrumb"
import { Container } from "semantic-ui-react"
import { TextHalf } from "../components/TextImageHalf"
const Equipo = ({ location }) => {
  const breadcrumbSections = [
    { key: 'inicio', content: 'Inicio' },
    { key: 'nosotros', content: 'Nosotros', active: true }
  ]

  const text = (<>
    <p>
      Reflect Partners surge en Mayo de 2018 impulsada por sus tres socios,
      con la idea de introducir en el mercado de las cabinas fotográficas una
      opción totalmente innovadora, creativa y entretenida.
    </p>

    <p>
      La calidad del servicio, profesionalismo y seriedad nos sitúa como empresa
      lider en el área de la fotografía para cualquier tipo de evento.
    </p>

    <p>
      Nuestra escenografía y preocupación por los detalles hace que la presencia
      de Reflect Partners sea única y exclusiva, brindando un servicio de calidad
      que plasma en un papel de alta calidad los mejores momentos de la fiesta.
    </p>

    <p>
      Actualmente, hemos estado presentes en más de 100 eventos, tales como Galas,
      Fiestas de Cumpleaños, Eventos Corporativos, Matrimonios, Almuerzos, y mucho más.
    </p>
    <p>
      Cotiza con nosotros y junto a Reflect Partners, <b>#ReflejaTuAlegría</b>
    </p>
  </>
  )

  return (
    <Layout location={location}>
      <Container fluid style={{ paddingTop: "3em" }}>
        <RPBreadcrumb sections={breadcrumbSections} />
        <TextHalf text={text} header="Nosotros" />
      </Container>
    </Layout>
  )
}

export default Equipo
