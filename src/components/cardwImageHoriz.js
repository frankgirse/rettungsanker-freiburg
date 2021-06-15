import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ReactTooltip from 'react-tooltip';



const cardwImageHoriz =  () => {
    return (

        <div className="lg:flex lg:flex-row md:flex           gap-2 lg:w-full">

            <div className="lg:w-11/12 lg:flex justify-between bg-gray-900 rounded-lg p-4 m-2">
            
                <div className="w-5/12 bg-gray-900 rounded-lg">
                <StaticImage
                        alt="Portrait"
                        src={"../images/portrait-mick.png"}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        backgroundColor="transparent"
                        placeholder="blurred"
                        layout="fullWidth"
            />      


                </div>
                <div className="flex flex-col items-start ml-4">
                    <h4 className="lg:float-right text-lg text-yellow-500 font-semibold">"Moin Moin"</h4>
                    <p className="text-xs text -mt-7">Augsgebaut im Stile eines Schiffrumpfes ist der Rettungsanker-Freiburg - im Zentrum der Altstadt Freiburgs - eine urige Lokation um vom Alltag etwas Abstand zu gewinnen und einfach nette Leute kennen zu lernen. Wir sind stolz auf unser buntes und internationales Publikum. Planen Sie privat oder geschäftlich ein Event? Sprechen Sie uns an oder kontaktieren Sie uns per e-mail. Wir freuen uns für Sie da zu sein und Sie bals einmal im Rettungsanker begrüssen zu dürfen. Mick und das Team des Rettungsankers </p>  
                </div>
                <div className="ml-5">
                <button data-tip data-for="reservationTip"                                               
                                className="lg:bg-gray-800 lg:px-2 lg:text-yellow-50                                                                                        ring-2 ring-yellow-50 hover:bg-yellow-500      active:bg-purple-600 font-bold font-sans uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button">
                            Reservationen
                    </button> 
                    <ReactTooltip id="reservationTip" className='custom-color' place="top" effect="solid" backgroundColor='#FFF8DC' textColor=' #191970' borderColor='orange'>
                         Reservation im Rettungsanker !!!
                    </ReactTooltip>
                </div>
            </div>
           
        </div>
    )
}
export default cardwImageHoriz;
