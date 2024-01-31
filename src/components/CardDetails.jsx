import React, { useState } from 'react';
import CardPhotos from './CardPhotos';

export default function CardDetails({ card }) {

        const [isRotated, setIsRotated] = useState(false);
        // card rotation on click 
        const handleClick = () => {
             setIsRotated(!isRotated);
        };

    return (

<div className='container mb-10 flex flex-row justify-center items-center '>
            
    <ul className='w-full flex flex-col container p-4 rounded-lg
                   text-balance transition-all duration-300 ease-in-out  '>    
        <li className='mt-4 border-2 border-violet-500 rounded-lg shadow-lg p-2'>
            <strong className='justify-center flex text-blue-800'>{card.name}  </strong>  
            <span className='justify-center flex flex-row text-center text-gray-600'>[Type: {card.type}][Value: {card.value}]</span> 
            <span className=' text-gray-800 text-balance px-6'>
            <strong className={`justify-center flex  mb-2 p-[4px]
                                border-b-[1px] border-t-[1px] border-gray-800  
                                ${isRotated ? 'text-red-800' : 'text-green-800'}`}> Meaning</strong> 
            <span className='justify-center flex flex-row text-center text-gray-600 text-sm mb-1 
                             md:hidden' 
                   onClick={handleClick}>Click here for the reverse meaning</span>
            <span className='text-balance px-2'>
                  {isRotated ? card.meaning_rev : card.meaning_up}</span>
            </span>  
            <span className='text-gray-800 text-balance px-5'>
            <h1  className='text-gray-400 hover:text-gray-600 text-right mr-3  text-sm transition-colors duration-500
                             sm:hidden
                             md:mt-8 md:block'
                             >Click the card to reverse it</h1>
            <img className={`h-[450px] w-[250px] float-right transition duration-500 delay-50 
                             sm:hidden
                             md:h-[350px] md:w-[200px] md:ml-1 md:block 
                            
                             ${isRotated ? 'rotate-180' : ''}`} onClick={handleClick}
                             src={ CardPhotos[card.name] || ""}
                             alt={`Pick a card from the list`}/> 
            <strong className='text-gray-800  justify-center flex mt-2 mb-2 p-[4px]
                                border-b-[1px] border-t-[1px] border-gray-800 '>
                                Description 
            </strong> 
            <span className='px-2' >{card.desc} </span>
            </span> 
        </li>
    </ul>
</div>

        )

}