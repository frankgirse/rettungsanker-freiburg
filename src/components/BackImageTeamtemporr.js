import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

/**
 * This component demonstrates how to use multiple stacked background images.
 * @return {*}
 * @constructor
 */
const BackImageTeam = () => {
  const { maritim, maatimseil, leuchtturm } = useStaticQuery(
    graphql`
      query {
        leuchtturm: file(relativePath: {eq: "leuchtturm_weiss_outline.png"}) {
          id
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 50, webpOptions: {quality: 70})
          }
        }
        maatimseil: file(relativePath: {eq: "maatimseil.png"}) {
          id
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 50, webpOptions: {quality: 70})
          }
        }

        maritim:file(relativePath: {eq: "Illu_maritim.png"}) {
          id
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 50, webpOptions: {quality: 70})
           }
      }
      }
    `
  )

  // Multiple Background Array
  const maritimExampleFluidImageStack = [
     
     leuchtturm.childImageSharp.fluid,
     maatimseil.childImageSharp.fluid,
     maritim.childImageSharp.fluid,
      ]

  return (
    <StyledStackedBackgrounds
      Tag="div"
      fluid={maritimExampleFluidImageStack}
      id="imagestack"
      role="img"
      aria-label="A GBI background stack with the maritimexample"
      style={{
        backgroundColor: 'bg-gray-700',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundPosition: '40vw 4vh, right, 70vw 5 vh, 5vw 0vh ,center',
        backgroundSize: '9vw 9vh, 12vw 12vh, 13vw 13vh, 40vw 15vh, 100vw 50vh'
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

export default BackImageTeam
