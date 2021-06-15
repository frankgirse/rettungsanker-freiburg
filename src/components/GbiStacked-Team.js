import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

/**
 * This component demonstrates how to use multiple stacked background images.
 * @return {*}
 * @constructor
 */
const GbiStacked = () => {
  const { maatimseil, leuchtturm ,maritim } = useStaticQuery(
    graphql`
      query {
        
        maatimseil: file(relativePath: { eq: "maatimseil.png" }) {
            childImageSharp {
                gatsbyImageData(width: 1800, quality: 70, webpOptions: {quality: 90})
              }
            }
        leuchtturm: file(relativePath: { eq: "Leuchtturm-weiss-outline.png" }) {
            childImageSharp {
                gatsbyImageData(width: 1800, quality: 70, webpOptions: {quality: 90})
              }   
        }

        maritim: file(relativePath: { eq: "Illu_maritim.png" }) {
            childImageSharp {
                gatsbyImageData(width: 1800, quality: 70, webpOptions: {quality: 90})
              }
          }
        }  
    `
  )

  // Multiple Background Array
  const maritimExampleFluidImageStack = [
     maatimseil.childImageSharp.fluid, 
     leuchtturm.childImageSharp.fluid, 
     maritim.childImageSharp.fluid,
      ]

  return (
    <StyledStackedBackgrounds
      Tag="div"
      fluid={maritimExampleFluidImageStack}
      id="imagestack"
      role="img"
      aria-label="A GBI background stack with the maritim example"
      style={{
        backgroundColor: 'bg-gray-600',
        backgroundRepeat: 'repeat, no-repeat, no-repeat',
        backgroundPosition: 'left, right, central top',
        backgroundSize: 'cover,cover, cover'
      }}
    />
    
  )
}

const StyledStackedBackgrounds = styled(BackgroundImage)`
  width: 100vm;
  height: 60vh;

  // Uncomment the following to demo hover effects.
  //&:before, &:after {
  //  visibility: hidden;
  //}
  //
  //&:hover {
  //  &:before, &:after {
  //    visibility: visible;
  //  }
  //}
`

export default GbiStacked
