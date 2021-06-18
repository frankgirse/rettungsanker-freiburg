import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ReactTooltip from 'react-tooltip';



const cardwImageHoriz =  () => {
    return (

        <div className="lg:w-12/12 lg:h-500 bg-gray-900 ">

            <div className=" mx-auto lg:grid lg:grid-cols-3 gap-x-10 justify-end lg:items-stretch lg:w-10/12 lg:h-full p-4 bg-gray-800 rounded-lg p-4 m-2">

                <div className="ml- w-2/12 h-auto bg-grey-800 rounded-lg lg:flex lg:flex-col item-center  ">
                <StaticImage
                        alt="Flaggen"
                        className="w-36 mb-5"
                        src={"../images/flagge-frankreich.gif"}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        backgroundColor="transparent"
                        placeholder="blurred"
                        layout="constrained"
            />   

            <StaticImage
                        alt="Flaggen"
                        className="w-36"
                        src={"../images/flagge-deutschland.gif"}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        backgroundColor="transparent"
                        placeholder="blurred"
                        layout="constrained"
            />     

                </div>

                <div className=" lg:w-full lg:h-12/12  ml-4">
                    <p className="text-xs lg:text-2xl"> Heute Freitag 18.Juli 2021 ab 20Uhr</p>
                    <p className="lg:text-6xl text-yellow-500 font-semibold">Gruppe D</p>
                                       
                    <p className="text-xs font-bold lg:text-5xl">Portugal - Deutschland</p>  
                </div>
                <div className="">
                <button data-tip data-for="reservationTip"                                               
                                className="ml-5 lg:bg-gray-800 lg:px-10 lg;float-right lg:text-2xl lg:text-yellow-50                                                                                        ring-2 ring-yellow-50 hover:bg-yellow-500      active:bg-purple-600 font-bold font-sans uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
