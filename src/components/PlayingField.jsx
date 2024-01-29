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
      return ' row-start-2  col-span-1 animate-fadeLeft';
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
     return 'row-start-2  col-start-2 transition-transform rotate-90 z-0 hover:z-20 animate-fadeLeft';
    default:
      return '';
  }
}

export default function PlayingField() {

         const [cardsDeck, setCardObtained] = useState([]);
         const [finalState, setFinalState] = useState([])
        
  return (
<>
    <div className='m-auto  rounded-lg 
     sm:max-w-[400px] md:max-w-[700px] lg:min-w-[50%] mt-6'>
  {/* top section */}
  <div className='w-full m-auto bg-gradient-to-br rounded-lg  from-[#ffffffa8] to-[#ffffff86]'>
    <div className='relative text-balance shadow-lg rounded-lg  w-100 backdrop-blur-lg px-2 py-2 mt-10 mb-5  '>
        <h1 className='text-gray-800 text-balance text-2xl'>Tarot Card Reading</h1>
        <p className='text-gray-700 text-balance'>Click <strong className='text-blue-500'>get reading</strong> to get your own Celtic Cross card spread, but not before you have decided what or whom the spread is for.</p>
        <p className='text-gray-700 text-balance'>In the list below, you can see what that card position stands for in divination.</p>
    </div>
  </div>
  
  <GenerateCards setCardObtained={setCardObtained} finalState = {finalState} setFinalState = {setFinalState} />
  {/* load all the extracted cards normal/reverse in their position */}
  <div className="m-auto mt-5 overflow-hidden grid grid-cols-5 sm:grid-cols-5 grid-rows-4 shadow-lg px-4 py-4 rounded-lg text-balance backdrop-blur-lg
                  sm:min-h-[300px] sm:min-w-[300px] 
                  lg:min-h-[700px] lg:min-w-[700px] 
                  bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86] ">
    {/* match the photo with the extracted names and load the picture for it*/}
    {cardsDeck.map((card, index) => (
      <div key={index} className={`card  ${getCardClass(index)}`}>
        <img className={`w-28 h-50 px-0 mb-2 transition duration-500 delay-50

                        md:w-32 md:h-42
                        lg:w-32 lg:h-60        
                        hover:-translate-y-1 hover:scale-105 hover:shadow-xl 
                        ${finalState[index] ? 'rotate-180' : ''} `} 
             src={ card.image || CardPhotos[card.name] || ""}
             alt={`Photo of ${card.name}`}
        />
      </div>
    ))}
  </div>

    {/* extracted card table with details on the meaning of the card (normal/reverse) and the name*/}
    <TableTarot cardsDeck={cardsDeck} setCardObtained={setCardObtained} finalState = {finalState} />

</div>
</>
  );
}