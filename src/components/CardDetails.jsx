import GenerateCards from './GenerateCards';
import React, { useState } from 'react';
import CardPhotos from './CardPhotos';

export default function CardDetails({ card }) {

        
   
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };


        return (

        <div className='container mb-10 flex flex-row justify-center items-center '>
            
            <div id='divCard' className='container flex flex-col justify-center items-center w-6/12  '>
                <h1 className='mb-4 text-lg  text-white'>Click the card to reverse it</h1>
             <img id="Cardel"  
             className={`h-[450px]  w-[250px]  rounded 
         transition duration-500 delay-50 hover:-translate-y-1 
         hover:scale-105 shadow-lg hover:shadow-xl  ${isRotated ? 'rotate-180' : ''}`} onClick={handleClick}
         src={ CardPhotos[card.name] || ""}
        alt={`Pick a card from the list`}/>
         </div>
        <ul className='  w-full transition flex flex-col container  duration-300 ease-in-out delay-100 
            p-4 rounded bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86] hover:bg-[#ffffffa8] w-100 backdrop-blur-lg  
            shadow-lg hover:shadow-lg text-balance'>
                
            <li className=''>
                
        <strong className='text-blue-800  justify-center flex '>{card.name} 
            <span className='text-gray-600'>[Type: {card.type}][Value: {card.value}]</span> 
            <br></br> 
        </strong>  
        <span className=' text-gray-800 text-balance px-5'>
            <strong className={` justify-center flex border-b-[1px] border-t-[1px]
          border-gray-800 mt-2 mb-2 ${isRotated ? 'text-red-800' : 'text-green-800'}`}> Meaning  <br></br></strong> {isRotated ? card.meaning_rev : card.meaning_up}
        </span>  
        <span className=' text-gray-800 text-balance px-5'>
            <strong className='text-gray-800  justify-center flex border-b-[1px]
            border-t-[1px] border-gray-800 mt-2 mb-2'>Description <br></br></strong> 
            <span className='line-clamp-[15] hover:line-clamp-[30] transition-all duration-500' >{card.desc} </span>
        </span> 
    </li>
</ul>
         
        </div>

        )

}