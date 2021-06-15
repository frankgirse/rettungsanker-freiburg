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
  const { textA, textB, lovepauli, albers, HamburgMoin, rettungsring, LogoAlt, barimpression } = useStaticQuery(
    graphql`
      query {
        textA:file(relativePath: { eq: "text833.png" }) {
          childImageSharp {
              gatsbyImageData(width: 1800, quality: 90, webpOptions: {quality: 90})
            }
          }
      
        textB:file(relativePath: { eq: "text835.png" }) {
          childImageSharp {
            gatsbyImageData(width: 1800, quality: 90, webpOptions: {quality: 90})
            }
          }

        lovepauli:file(relativePath: { eq: "lovepauli.png" }) {
          childImageSharp {
            gatsbyImageData(width: 1800, quality: 90, webpOptions: {quality: 90})
            }
          }
  
        albers: file(relativePath: { eq: "Albers_Illu_white.png" }) {
          childImageSharp {
            gatsbyImageData(width: 1800, quality: 90, webpOptions: {quality: 90})
              
            }
          }

        rettungsring: file(relativePath: { eq: "rettungsring.png" }) {
          childImageSharp {
              gatsbyImageData(width: 1800, quality: 90, webpOptions: {quality: 90})
              
            }
          }    
        HamburgMoin: file(relativePath: { eq: "hamburgsagtmoin.png" }) {
          childImageSharp {
              gatsbyImageData(width: 1800, quality: 90, webpOptions: {quality: 90})
              
            }
          }
        LogoAlt: file(relativePath: { eq: "logoalt.jpg" }) {
          childImageSharp {
              gatsbyImageData(width: 1800, quality: 90, webpOptions: {quality: 90})
              
            }
          }

        barimpression: file(relativePath: { eq: "hero20.png" }) {
          childImageSharp {
                gatsbyImageData(width: 1800, quality: 90, webpOptions: {quality: 90})
            }
        }
      }
    `
  )

  // Multiple Background Array
  const barimpressionExampleFluidImageStack = [
     textA.childImageSharp.fluid, 
     textB.childImageSharp.fluid, 
     lovepauli.childImageSharp.fluid,
     albers.childImageSharp.fluid,
     rettungsring.childImageSharp.fluid,
     HamburgMoin.childImageSharp.fluid,
     LogoAlt.childImageSharp.fluid,
     barimpression.childImageSharp.fluid,
      ]

  return (
    <StyledStackedBackgrounds
      Tag="div"
      fluid={barimpressionExampleFluidImageStack}
      id="imagestack"
      role="img"
      aria-label="A GBI background stack with the barimpression example"
      style={{
        backgroundColor: 'bg-gray-600',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat,no-repeat',
        backgroundPosition: '2vw 23vh, 2vw 40vh, 64vw 34vh, 38vw 0vh, 33vw 29vh, 80vw 5vh, 2vw 5vh, top',
        backgroundSize: '18vw, 45vw ,28vw 25vh , 9vw, 6vw , 10vw, 40vw 15vh, 100vw 75vh'
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
