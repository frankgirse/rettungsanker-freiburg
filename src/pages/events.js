import React from "react";
import SpotLight from '../images/Albers.png'
import Layout from "../components/layout";
import SEO from "../components/seo";


function events() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Geschichte"
      />

      <section className="flex flex-col items-center ">
        <div className="">
         
          <p className="text-center text-yellow-600 text-5xl font-bold -z-30 uppercase">events ?</p>
          
        </div>

        <figure className="w-10/12 py-2/12 mx-20">
          <img 
          alt="Spotlight Rettungsanker" 
          className="w-6/12"
          src={SpotLight} />
        </figure>
      </section>
    </Layout>
  );
}

export default events;