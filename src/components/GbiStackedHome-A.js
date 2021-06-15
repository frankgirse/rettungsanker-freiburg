import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

/**
 * This component demonstrates how to use multiple stacked background images.
 * @return {*}
 * @constructor
 */
const GbiStackedHomeA = () => {
  const { hero} = useStaticQuery(
    graphql`
      query {
        hero:file(relativePath: { eq: "Hero100.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            
            }
          }
        }
      }
    `
  )

  // Multiple Background Array
  const heroExampleFluidImageStack = [
     hero.childImageSharp.fluid, 
         ]

  return (
    <StyledStackedBackgrounds
      Tag="div"
      fluid={heroExampleFluidImageStack}
      id="imagestack"
      role="img"
      aria-label="A GBI background stack with the hero example"
      style={{
        backgroundColor: 'bg-gray-600',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'contain',
        backgroundSize: '100vw'
      }}
    />
    
  )
}

const StyledStackedBackgrounds = styled(BackgroundImage)`
  width: 100vm;
  height: 100vh;

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

export default GbiStackedHomeA
