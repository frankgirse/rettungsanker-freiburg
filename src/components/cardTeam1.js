import React from 'react';
import MickImage from '../images/portrait-mick1.png';
const CardImage = () => {
    return (
  <div>
    <div className="p-1 bg-transparent">
            <p className="text-yellow-400 text-3xl font sans font-bold mb-2 ">Captain</p>
  <div className="bg-gray-700  rounded-4lx shadow-2xl flex flex-col justified-center gap-y-5 shadow-2xl rounded">
    <img
     src={MickImage} 
     alt="Portrait Mick" 
     className="mx-auto object-cover object-top rounded-full h-56 w-56" />
    
      <p className=".leading-none text-yellow-100 font-sans text-xxs text-left px-1 sx:text-sm xl:text-justify xl:text-1 xl:leading-tight" >Michael Schreck und Volker Schneider haben 2017 den Rettungsanker erfolgreich vom Stapel gelassen. Seit Januar 2020 hat der Captain die alleinige Verantwortung für den Rettungsanker übernommen und leitet den Kahn sicher und verantwortungsbewusst durch die stürmischen Wogen.!</p>
    

  </div>

</div>


        </div>
    )
}

export default CardImage;
