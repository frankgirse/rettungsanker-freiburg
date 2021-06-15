import { Link } from "gatsby";
import React, { useState } from "react";
import LogoNeu from '../images/Logo_neu.png';
import {StaticImage} from 'gatsby-plugin-image';
function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  

  return (
    <header className=" bg-gray-900 md:h-lg:h-24 xl:h-16">
    <div className="mt-4 flex flex-row items-center justify-between max-w-09xl mx-auto lg:h-6">
      <Link to="/">-
      <div className="lg:block 2xl:w-20 2xl:h-12">
      <StaticImage 
           alt="Schild Rettungsanker"
           className="hidden no-underline md:block md:w-12 lg:ml-10 lg:w-24 xl:w-28 "
           src={'../images/Logo_neu.png'}
           formats={[ "AUTO" , "WEBP", "AVIF"]}
           backgroundColor="transparent"
           placeholder="blurred"
           Layout="constrained"
          />
          </div>
      </Link>
      
      <button
        className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <svg
          className="w-6 h-7 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      
            <nav
        className={`${
          isExpanded ? `block` : `hidden`}
          text-right  px-2 rounded-xl border-yelllow-400 w-full h-full md:block md:items-center md:w-auto`}
      >
        {[

         {
           route: `/`,
             title: `Home`,
          },
                 

            {
              route: `/geschichte`,
              title: `Geschichte`,
            },

            {
              route: `/team`,
              title: `Team`,
            },
            {
              route: `/drinks_snacks`,
              title: `Drinks & Snacks`,
            },

            {
              route: `/sportarena`,
              title: `Sportarena`,
            },

            {
              route: `/events`,
              title: `Events`,
            },


            {
              route: `/wohin`,
              title: `Wohin ?`,
            },
           
          ].map((link) => (
            <Link
              className="px-4 bg-gray-900 curser-auto block mt-1 rounded-xl border-0 yellow-400 h-auto font-serif text-2xl tracking-wide font-bold text-yellow-400 hover:bg-yellow-300 hover:text-red-700 bg-gray-800 no-underline sm:text-4xl md:hover:text-yellow-100 md:hover:bg-gray-900  md:text-sxx md:mr-6 md:inline-block md:mt-0 md:ml-4 lg:text-2xl  lg:hover:bg-gray-900 lg:rounded-none lg:border-b-4 lg:border-gray-900 hover:border-yellow-100 xl:text-1xl 2xl:text-2xl"
              to={link.route}
            >
              {link.title}
            </Link>
       

          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;