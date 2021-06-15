import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const MultiBackground = ({ className }) => {
    const {
        streetsign , textA, textB, lovepauli, albers, HamburgMoin, rettungsring, LogoAlt, barimpression, } = useStaticQuery(

    graphql`
      query {
        streetsign: file(relativePath: { eq: "streetsignblue.png" }) {
          childImageSharp {
            fluid(quality: 100,maxWidth: 420 ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        textA: file(relativePath: { eq: "text833.png" }) {
          childImageSharp {
            fluid(quality: 100, ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        textB: file(relativePath: { eq: "text835.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 420) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          lovepauli: file(relativePath: { eq: "lovepauli.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
          }
          albers: file(
            relativePath: { eq: "Albers_Illu_white.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
        rettungsring: file(relativePath: { eq: "rettungsring.png" }) {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
             }
        HamburgMoin: file(relativePath: { eq: "hamburgsagtmoin.png" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 420) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
            }
        LogoAlt: file(relativePath: { eq: "logoalt.png" }) {
                    childImageSharp {
                      fluid(quality: 100, maxWidth: 420) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                }
        barimpression: file(relativePath: { eq: "hero20.png" }) {
                        childImageSharp {
                          fluid(quality: 100, maxWidth: 1100) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                    }
                  }
    `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    streetsign.childImageSharp.fluid,
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
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <StyledInnerWrapper>
        
      </StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledInnerWrapper = styled.div`
  margin-top: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledMultiBackground = styled(MultiBackground)`
  width: 100%;
  min-height: 75vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: auto;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */

    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: 25vw 65vh,2vw 35vh, 2vw 54vh, 73vw 52vh, 39vw 2vh, 32vw 38vh, 80vw 6vh, 2vw 13vh, center;
    background-size: 10vw ,20vw, 45vw, 18vw, 9vw, 8vw, 10vw, 40vw 15vh , 100vw 66vh; 
`

export default StyledMultiBackground