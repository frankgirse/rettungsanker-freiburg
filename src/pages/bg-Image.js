import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';


const GbiBridged = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "Illu_maritim.png"}) {
        id
        childImageSharp {
          gatsbyImageData(width: 1200, quality: 50, webpOptions: {quality: 70})
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default GbiBridged


