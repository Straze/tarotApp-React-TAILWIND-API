import React, { useState } from 'react';


// switch for the different types of predictions
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
      return '';
  }
}

export default function TableTarot({cardsDeck, finalState, revealedCards}) {


    return (
       
  <div className=' mb-10'>
    {cardsDeck.map((card, index) => (
        <div key={card.name}>
          <ul className=' '>
            <li className='transition duration-300 ease-in-out delay-100 px-2 py-2 mt-5 ml-2 mr-2 rounded shadow-md          
                           hover:shadow-lg hover:-translate-y-1 hover:scale-101 hover:bg-[#ffffff77]
                           bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86]'>
              <span className=''>{getPredictionTable(index)} </span>
              <strong className='text-blue-500'>{card.name} <br></br> </strong>  
              {revealedCards[index] ?  <span className={`${finalState[index] ? 'text-red-600' : 'text-green-600'} text-balance px-5`}>
                            {finalState[index] ? card.meaning_rev : card.meaning_up}
              </span> : <span className='text-gray-600'>Reveal your card first!</span>}
            </li>
         </ul>
        </div>
         ))}
  </div>

        )

}