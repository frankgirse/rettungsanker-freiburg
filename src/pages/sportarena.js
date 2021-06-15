import React from "react";
import SpotLight from '../images/Albers.png'
import Layout from "../components/layout";
import StyledMultiBackground from '../components/MultiBgImageSportsbar'
import SEO from "../components/seo";
import CardsHoriz from '../components/cardImageHorizSportArena'
import { StaticImage } from "gatsby-plugin-image";


function Sportarena() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="sporarena"
      />

          <section className="">
           <div>
                  <StyledMultiBackground></StyledMultiBackground>
                </div>
         </section>
         <section  className="lg:mt-3">
                <div>
                  <CardsHoriz></CardsHoriz>
                </div>
         </section>
    </Layout>
  );
}

export default Sportarena;