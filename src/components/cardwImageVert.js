import React from 'react';
import ReactTooltip from 'react-tooltip';
import {StaticImage} from"gatsby-plugin-image";
const cardwimagevert = () => {
  return (
    
    <div className="shadow-md rounded-lg overflow-hidden flex flex-col items-center">
        <div>
            <StaticImage
                  alt="Portrait"
                  src={"../../public//static//portrait-mick1.webp"}
                  formats={["AUTO", "WEBP","AVIF"]}
                  backgroundColor="transparent"
                  placeholder="blurred"
                >
          </StaticImage>
      </div>
      <div className="p-4">
          <h5 className="text-center text-3xl text-yellow-500 font-semibold mb-2">"Moin Moin</h5>

          <p className="mb-4 text-sm text-justify">Augsgebaut im Stile eines Schiffrumpfes ist der Rettungsanker-Freiburg - im Zentrum der Altstadt Freiburgs - eine urige Lokation um vom Alltag etwas Abstand zu gewinnen und einfach nette Leute kennen zu lernen. Wir sind stolz auf unser buntes und internationales Publikum. Planen Sie privat oder geschäftlich ein Event? Sprechen Sie uns an oder kontaktieren Sie uns per e-mail. Wir freuen uns für Sie da zu sein und Sie bals einmal im Rettungsanker begrüssen zu dürfen. Mick und das Team des Rettungsankers   </p>
          
          
          <button data-tip data-for="emailFooterTip" className="flex-shrink-0 px-4 py-2 text-base font-semibold text-yellow-50 bg-gray-800 rounded-lg ring-2 ring-gray-100 shadow-2lx hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        SOS Rettungsanker
                    </button> 
                    <ReactTooltip id="emailFooterTip" className='custom-color' place="right" effect="solid" backgroundColor='#FFF8DC' textColor=' #191970' borderColor='yellow'>
                         sende e-mail Adresse an Rettungsanker !!!
                    </ReactTooltip>

</div>
</div>
 )
}

export default cardwimagevert

