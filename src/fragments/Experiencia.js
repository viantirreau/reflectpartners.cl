import React from "react"
import { TextImageHalf } from "../components/TextImageHalf"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from "../components/Carousel"
import ImageCircle from "../components/ImageCircle"
import Lottie from "lottie-react-web"
import faces from "../animations/faces.json"
import x from "../animations/x.json"
import { Grid } from "semantic-ui-react"
import PillButton from "../components/PillButton"

const Experiencia = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativePath: { regex: "/Gallery-Home/i" } }) {
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

  const facesAnim = (
    <ImageCircle
      background="#ffdb01"
      image={<Lottie options={{ animationData: faces }} />}
    />
  )
  const xAnim = (
    <ImageCircle
      background="#ffdb01"
      image={<Lottie options={{ animationData: x }} />}
    />
  )
  const subheader = (
    <>
      <p>
        Usamos la mejor tecnología fotográfica del mercado para que tus
        invitados no paren de sonreír.
      </p>
      <p>
        Confía en nosotros para plasmar un maravilloso recuerdo de tu
        matrimonio, evento corporativo, gala, cumpleaños o fiesta de graduación.
      </p>
    </>
  )
  // <p> Trabajamos con gente fantástica y las más reconocidas marcas para crear experiencias únicas. </p>
  return (
    <>
      <TextImageHalf
        header="Haz que tu evento sea inolvidable"
        text={subheader}
        image={carousel}
        pillButton={<PillButton link="/cotiza" />}
        bg="#ffdb01"
      />
      <Grid stackable={true} columns={2} rows={1}>
        <Grid.Row centered={true}>
          <Grid.Column>
            <TextImageHalf
              header="X by Reflect"
              text="Una cabina abierta moderna, con una gran pantalla táctil.
              Ideal para activaciones, conferencias y eventos con muchos invitados."
              image={xAnim}
              secondarySize="0.5em"
              vertical={true}
            />
          </Grid.Column>
          <Grid.Column>
            <TextImageHalf
              header="Faces by Reflect"
              text="Un estudio fotográfico de tamaño discreto.
              Especialmente diseñado para retratos. Ideal para matrimonios y cumpleaños."
              image={facesAnim}
              secondarySize="0.5em"
              vertical={true}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Experiencia
