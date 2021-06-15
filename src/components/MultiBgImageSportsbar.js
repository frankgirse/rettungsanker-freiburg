import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {StaticImage} from 'gatsby-plugin-image'
const MultiBackground = ({ className }) => {
    const {
        arenabanner, fussballskyTV, sportarenaillu, EuroLogo, skylogo, albers, LogoAlt, arenagrafik } = useStaticQuery(

    graphql`
      query {
        arenabanner: file(relativePath: { eq: "sportarenabanner.png" }) {
          childImageSharp {
            fluid(quality: 100, ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        fussballskyTV: file(
          relativePath: { eq: "FussballTV.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 420) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          sportarenaillu: file(relativePath: { eq: "sportarena-illu.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
          }
          EuroLogo: file(
            relativePath: { eq: "Euro_Logo.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
        skylogo: file(relativePath: { eq: "SkyLogo.png" }) {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
             }
        albers: file(relativePath: { eq: "Albers_Illu_white.png" }) {
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
        arenagrafik: file(relativePath: { eq: "sportarenagrafik.png" }) {
                        childImageSharp {
                          fluid(quality: 100, maxWidth: 900) {
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
    arenagrafik.childImageSharp.fluid,
    fussballskyTV.childImageSharp.fluid,
    sportarenaillu.childImageSharp.fluid,
    skylogo.childImageSharp.fluid,
    albers.childImageSharp.fluid,
    LogoAlt.childImageSharp.fluid,
    EuroLogo.childImageSharp.fluid,
    arenabanner.childImageSharp.fluid,
    
    
      ]
  

  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <StyledInnerWrapper>
              <figure className="lg:w-96 lg:py-2/12 lg:mx-auto " >
              <StaticImage
                        alt="Illustration Sportarena"
                        className=""
                        src={"../images/sportarena.png"}
                        layout="constrained"/>
              </figure>
              
             
              

      </StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledInnerWrapper = styled.div`
  margin-top: 1%;
  display: flex;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  flex-direction: column;
  align-items: center;
`

const StyledMultiBackground = styled(MultiBackground)`
  width: 100%;
  min-height: 76vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: auto;
  /* So we0 won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */

    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: 5vw 5vh, center 28vh, 86vw 15vh, 85vw top , 65vh top, 65vw top, center top, 70vw 12vh;
    background-size: 17vw 75vh, 60vw 50vh, 12vw, 3vw, 7vw,  19vw , 30vw , 16vw; 
`

export default StyledMultiBackground