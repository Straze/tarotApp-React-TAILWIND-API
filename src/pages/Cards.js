import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import CardPhotos from '../components/CardPhotos';
import CardDetails from '../components/CardDetails';

export default function Cards() {

    const [cardSearched, setCardSearched] = useState([]);
    const [cardClicked, setCardClicked] = useState([]);

    function displayDetails(card) {
        setCardClicked(card)
    }
  return (
    <>
    <div className='w-screen min-h-[800px] container'>
     <Search cardSearched ={cardSearched} setCardSearched ={setCardSearched}  />
    <div className='container flex flex-row'>
     <div className='container w-9/12 overflow-auto scroll-auto justify-items-center  
     lg:min-w-[700px]  sm:min-w-[300px] max-h-[700px]
    bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86] w-100 backdrop-blur-lg
    grid grid-cols-5 sm:grid-cols-5   
    shadow-lg px-4 py-4 rounded-lg text-balance  '>
     {cardSearched.map((card) => (
      <div key={card.name}>
         <img onClick={() => displayDetails(card)} className=' h-[250px] w-[150px] mt-2 ml-2
         transition duration-500 delay-50 rounded px-[1px] hover:-translate-y-1 
         hover:scale-105 hover:shadow-xl' 
         src={ CardPhotos[card.name] || ""}
        alt={`Photo of ${card.name}`}/>
        
        </div>
        
      ))}

     
      
     </div>
      <CardDetails card={cardClicked} />
      </div>
  </div>
  </>
  )
}