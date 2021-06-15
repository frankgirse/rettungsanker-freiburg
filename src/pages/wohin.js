import React from "react";
import SpotLight from '../images/Albers.png'
import Layout from "../components/layout";
import SEO from "../components/seo";
import '../styles/global.css';
import Hero from '../components/Hero';
import { StaticImage } from "gatsby-plugin-image";
const wohin = () => {
  return (

     <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Wohin"
      />
       
      <section className="flex flex-col items-center ">
       
        <div className="">
        
          <p className="text-center text-yellow-600 text-5xl font-bold -z-30 uppercase">Wohin ?</p>
            
        </div>
        
        </section>
        
        <section>
        <figure className="w-10/12 py-2/12 mx-20">
          <StaticImage
          alt="Illustration Karte Altstadt Freiburg"
          className="w-9/12"
          src={"Map-ALTSTADTsvg"}
            /> 
  
        </figure>
        
      </section>
      
      
      



    
  
    </Layout>   
  )
}

export default wohin