import GenerateCards from './GenerateCards';
import React, { useState } from 'react';

function getPredictionTable(index) {

  switch (index % 10) {
    case 0:
      return 'Your condition at present:';
    case 1:
      return 'Your obstacle and trouble at present:';
    case 2:
      return 'The best possible outcome for you:';
    case 3:
      return 'The cause to your present situation:';
    case 4:
      return 'Your immediate past:';
    case 5: 
     return 'Your immediate future:';
    case 6: 
     return 'You at present:';
    case 7: 
     return 'Your surroundings at present:';
    case 8: 
     return 'Your hopes and fears:';
    case 9: 
     return 'The outcome:';
    default:
      return ''; // Handle additional cases if needed
  }
}

export default function TableTarot({cardsDeck, setCardObtained}) {



        return (

        <div className='container mb-10'>
    
    {cardsDeck.map((card, index) => (
        <div key={card.name}>
         <ul className='container w-9/12'>
            <li className='transition duration-300 ease-in-out delay-100 
            px-2 py-2 mt-5 ml-2 mr-2 rounded bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86] hover:bg-[#ffffff77] w-100 backdrop-blur-lg hover:-translate-y-1 
            hover:scale-101 
            shadow-md hover:shadow-lg text-balance'>
              <span className=''>{getPredictionTable(index)} </span>
            <strong className='text-blue-500'>{card.name} <br></br> </strong>  
            <span className=' text-gray-800 text-balance px-5'>{Math.random() < 0.5 ? card.meaning_rev : card.meaning_up}</span>  </li>
         </ul>
       
        </div>
         ))}
        </div>

        )

}