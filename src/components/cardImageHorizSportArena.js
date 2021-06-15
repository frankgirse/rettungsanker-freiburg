import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ReactTooltip from 'react-tooltip';



const cardwImageHoriz =  () => {
    return (

        <div className="lg:w-12/12 lg:h-500 bg-green-800 ">

            <div className=" mx-auto lg:grid lg:grid-cols-3 justify-end lg:items-stretch lg:w-10/12 lg:h-full p-4 bg-red-600 rounded-lg p-4 m-2">
            
                <div className="ml- w-3/12 h-auto bg-blue-300 rounded-lg">
                <StaticImage
                        alt="Flaggen"
                        className="w-96 h-full"
                        src={"../images/football-cup-template-design 1.png"}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        backgroundColor="transparent"
                        placeholder="blurred"
                        layout="constrained"
            />      

                </div>

                <div className=" lg:w-full lg:h-11/12 flex flex-col items-start ml-4">
                    <p className="text-xs lg:text-2xl"> Heute Dienstag 15.Juli 2021 ab 17Uhr</p>
                    <p className="lg:float-right lg:text-7xl text-yellow-500 font-semibold">Gruppe D</p>
                                       
                    <p className="text-xs lg:text-5xl">Frankreich -Deutschland</p>  
                </div>
                <div className="w-2/12 bg-white">
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
