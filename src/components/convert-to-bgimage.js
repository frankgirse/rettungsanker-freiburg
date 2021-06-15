import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import '../styles/global.css'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const GbiBridged = () => {
    const { backgroundImage123 } = useStaticQuery(
      graphql`
        query {
          backgroundImage123: file(relativePath: { eq: "Illu_maritim.png" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 50, 
                webpOptions: {quality: 70}, 
                width: 1000
              )
            }
          }
        }
      `
    )
    const image = getImage(backgroundImage123)

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
      className="masthead"
    >
        <h1>gatsby-background-image & Gatsby 3.0</h1>
      
    </BackgroundImage>
  )
}
export default GbiBridged