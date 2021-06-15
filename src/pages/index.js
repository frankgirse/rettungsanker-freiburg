import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {StaticImage} from 'gatsby-plugin-image';
import LogoAlt from "../images/logoalt.png";
import Hero100 from "../images/Hero.png";
import PalomaImage from "../images/Albers_Illu_white.png";
import StyledMultiBackground from "../components/MultiBgImg";
import ZapfsauleImage from "../images/rastergrafik.png";
import BallonImage from "../images/astra-ballons.png";
import BrushImage from "../images/brush.png";
import CardImageVer from '../components/cardwImageVert';
import CardImageHoriz from '../components/cardwImageHoriz';
import Modal from '../components/modal';
import '../styles/global.css';
import "../components/layout.css";
function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="w-screen h-full mx-auto">
        <StaticImage 
           alt="Schild Rettungsanker"
           className="md:hidden "
           src={LogoAlt}
           formats={[ "AUTO" , "WEBP", "AVIF"]}
           backgroundColor="yellow"
           placeholder="blurred"
           Layout="fullWidth"
          />
        

           
      </section>

      <section className="w-12/12 h-full mx-auto md-hidden">
        <img
            className="w-full h-full object-cover md:hidden"
            src={Hero100}
        />
        
       
      </section>

      <section className="hidden md:block md:object-contain md:-m-16 w-12/12 md:min-h-screen md:h-full md:p-2 md:mx-auto lg:">
      <StyledMultiBackground></StyledMultiBackground>
      </section>
                
             
            
  <section>  
            
    <div className="w-screen bg-gray900 flex flex-col items-center lg:-mt-60 lg:flex lg:flex-row lg:w-screen lg:h-18 lg:jusify-center lg:items-start ">
      
            <div className="bg-gray-900 md:w-4/12 relative md: lg:text-3xl xl:text5xl">
                <img
                    alt="Brush"
                    className=" transform -rotate-3 -translate-y-16 w-full opacity-100 mx-auto sm:w-full md:w-80 lg:w-10/12 xl:3/12 "
                    src={BrushImage}
                  />

                  <figure className="ranslate-y-48 xl:">
                  <StaticImage
                    alt="Slogan"
                    src={ "../images/slogan.png"}
                    layout="constrained"
                    className=" w-8/12 transform translate-x-20 -translate-y-60 transform -rotate-6"/>

                  </figure>
                 
                   </div>

      <div className=" z-99 -mt-24 bg-gray-900 text-center mx:auto font-bold text-3xl sm:text-4xl sm:-mt-4 md:w-3/12 md:ml-5 py-4 md:mt-0 lg:mt-3 "> 
              <Modal />          
      </div>
      
         
      <div className="mt-5 w-11/12 px-0 py-2 bg-gray-900 border rounded-2xl border-yellow-500 sm:px-0 sm:w-9/12 md:mr-10 md:bg-gray-900 md:w-5/12 lg:hidden">            
      <CardImageVer/>
      </div>
      <div className="hidden lg:block lg:w-9/12 bg-gray-900">            
      <CardImageHoriz/>
      </div>


      </div>
      
    </section>
    
    <section className="mt-10 w-12/12 h-4/6  lg:mb-10">
      <div>
      <p className="p-3 text-5xl text-center font-serif font-bold text-yellow-400 lg:text-8xl">Die Kneipe</p>

      <div className="mt-10 grid grid-cols-3 relativ">

      <img
              alt="Paloma"
              className="w-96 object-fill translate-y-10 mx-auto "
              src={PalomaImage}
            />
            <img
              alt="Zapfsaule"
              className=" w-12/12 objekt-contain transform scale-150 mx-auto "
              src={ZapfsauleImage}
            />
            <img
              alt="Astra ballons"
              className=" w-60 transform scale-150 -translate-x-5 -translate-y-10 objekt-fill mx-auto "
              src={BallonImage}
            />
      </div>
        
        
        </div>
      



    </section>

    </Layout>
  );
}

export default IndexPage;
