import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const GbiBridged = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Illu_maritim.png" }) {
          childImageSharp {
            gatsbyImageData(
              width:1500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  // Use like this:
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
    
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      
    >
      <div style={{minHeight: 400, minWidth: 300}}>

      
        <GatsbyImage image={image} alt={"testimage"}/>
      
      
</div>
    </BackgroundImage>
  )
}
export default GbiBridged