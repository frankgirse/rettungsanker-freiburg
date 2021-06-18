import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import ReactTooltip from 'react-tooltip';
import { StaticImage } from "gatsby-plugin-image";
import {Link} from 'gatsby';

const MultiBackground = ({ className }) => {
    const {
        albers,streetsign,textA,entree } = useStaticQuery(

    graphql`
      query {
        albers: file(relativePath: { eq: "Albers_Illu_white.png" }) {
          childImageSharp {
            fluid(quality: 100,maxWidth: 420 ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      
        streetsign: file(relativePath: { eq: "street-sign-3.png" }) {
          childImageSharp {
            fluid(quality: 100,maxWidth: 420 ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        textA: file(relativePath: { eq: "textLageplan.png" }) {
          childImageSharp {
            fluid(quality: 100, ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      entree: file(relativePath: { eq: "schild_entree.png"}){
               childImageSharp {
                  fluid(quality: 100,) {
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
    textA.childImageSharp.fluid,
    entree.childImageSharp.fluid,
    albers.childImageSharp.fluid,
    streetsign.childImageSharp.fluid,
  ]
  

  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <StyledInnerWrapper>
                <section className="mt-6 w-full flex flex-row justify-end">
                    <div className="w-3/12"></div>
                    <div className="w-3/12"></div>
                    <figure className="mx-aoto w-3/12 flex flex-col item-end bg-transparent py-2/12 mx-auto">
          < StaticImage
                                alt="Illustration Karte Altstadt Freiburg"
                                className="mt-2 rounded-lg rounded-b-none ring-1 ring-white lg:w-11/12 lg:h-auto"
                                src={"../images/mapAltstadt.png"}
                                backgroundColor="#ebc40c"
                                layout="constrained"
                                />
                        <figcaption className="bg-red-900 lg rounded-b-lg w-11/12 h-10 text-center text-yello-100 text-3xl">Illustration Altstadt Freiburg</figcaption> 
                   </figure>
              </section>



              <div className=" w-full flex flex-row justify-end mx-auto mt-6 px-10 mb-6 underline-no lg:mt-2">
                    <div className="w-4/12">
                    <div data-tip data-for="googleMapTip" className="lg:w-8/12 py-4 text-center lg:text-4xl font-semibold text-yellow-50 bg-gray-800 rounded-lg ring-2 ring-gray-100 shadow-2lx hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                    <Link to={"/test777"}>Google Map</Link>!
                  
                     
                    </div>
                    <ReactTooltip id="googleMapTip" className='custom-color' place="top" effect="solid" backgroundColor='#E1C13B' textColor=' #062601' borderColor='#6805F2'>
                              klick mich und suche mit Google Maps  !!!
                          </ReactTooltip>
                  </div>
              </div>
      </StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledInnerWrapper = styled.div`
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledMultiBackground = styled(MultiBackground)`
  width: 100%;
  min-height:   86vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: auto;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */

    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat ;
    background-position: 55vw top, left top, 33vw 44vh, 13vw 56vh;
    background-size: 37vw, 90vw 70vh , 11vw , 26vw; 
`
 
export default StyledMultiBackground