import GenerateCards from './GenerateCards';
import React, { useState } from 'react';
import CardPhotos from "./CardPhotos";
import TableTarot from './TableTarot';

// switch for the card positions on the grid
function getCardClass(index) {
  switch (index % 10) {
    case 0:
      return 'row-start-1 col-start-2  animate-fadeTop delay-100';
    case 1:
      return 'row-start-2  col-start-3 animate-fadeRight';
    case 2:
      return 'row-start-2  col-start-2 z-10 animate-fadeRight';
    case 3:
      return ' row-start-2  col-start-1 animate-fadeLeft';
    case 4:
      return 'row-start-3  col-start-2 animate-fadeBottom';
    case 5: 
     return 'row-start-1  col-start-5 transition-all animate-fadeRight rotate-[20deg] -translate-x-[1rem] delay-100';
    case 6: 
     return 'row-start-2  col-start-5 transition-all animate-fadeRight rotate-[20deg] -translate-x-[1rem] delay-300';
    case 7: 
     return 'row-start-3  col-start-5 transition-all animate-fadeRight rotate-[20deg] -translate-x-[1rem] delay-500';
    case 8: 
     return 'row-start-4  col-start-5 transition-all animate-fadeRight rotate-[20deg] -translate-x-[1rem]  delay-1000';
    case 9: 
     return 'row-start-2  col-start-2 xl:-translate-x-8 xl:translate-y-4 transition-transform rotate-90 z-0 hover:z-20 animate-fadeLeft';
    default:
      return '';
  }
}

export default function PlayingField() {

         const [cardsDeck, setCardObtained] = useState([]);
         const [finalState, setFinalState] = useState([])
         const [revealedCards, setRevealedCards] = useState(Array(10).fill(false));
         
        // change the state of the cards to reveal them
         const handleClick = (index) => {
          setTimeout(() => {
            setRevealedCards(prevState => {
          const updatedCards = [...prevState];
          updatedCards[index] = true;
          return updatedCards;
          });
          }, 200);
          
         };
         
         
  return (
<>
    <div className='m-auto rounded-lg mt-6
                    sm:max-w-[400px] 
                    md:max-w-[700px] 
                    lg:min-w-[50%] '>
  <div className='w-full m-auto bg-gradient-to-br rounded-lg  from-[#ffffffa8] to-[#ffffff86]'>
    <div className='relative text-balance shadow-lg rounded-lg  w-100 backdrop-blur-lg px-2 py-2 mt-10 mb-5  '>
        <h1 className='text-gray-800 text-balance text-2xl'>Tarot Card Reading</h1>
        <p className='text-gray-700 text-balance'>Click 
        <strong className='text-blue-500'>get reading</strong> to get your own Celtic Cross card spread, 
        but not before you have decided what or whom the spread is for.</p>
        <p className='text-gray-700 text-balance'>In the list below, you can see what that card position stands for in divination.</p>
    </div>
  </div>
  
  <GenerateCards setCardObtained={setCardObtained} setFinalState = {setFinalState} setRevealedCards = {setRevealedCards} />
  <div className="m-auto mt-5 overflow-hidden grid grid-cols-5 grid-rows-4 shadow-lg px-4 py-4 rounded-lg text-balance backdrop-blur-lg
                  sm:min-h-[300px] sm:min-w-[300px] sm:grid-cols-5
                  lg:min-h-[700px] lg:min-w-[700px] 
                  bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86] ">
    
    {cardsDeck.map((card, index) => (
      <div key={index}  onClick={() => handleClick(index)} className={`card  ${getCardClass(index)}`}>
        <img className={`w-28 h-50 px-0 mb-2 transition duration-500 
                        md:w-32 md:h-42
                        lg:w-32 lg:h-60        
                        hover:-translate-y-1 hover:scale-105  transform hover:shadow-xl 
                        ${finalState[index] ? 'rotate-180' : ''} ${revealedCards[index] ? '' : '-rotate-y-[180deg]'} `} 
             
             src={revealedCards[index] ? CardPhotos[card.name] : 'https://i.pinimg.com/236x/df/81/3b/df813b2ae22b5e321a0ea1bdb2562497.jpg'}
             alt={`Photo of ${card.name}`}
        />
      </div>
    ))}
  </div>

    <TableTarot cardsDeck={cardsDeck} setCardObtained={setCardObtained} finalState = {finalState} revealedCards = {revealedCards}/>

</div>
</>
  );
}