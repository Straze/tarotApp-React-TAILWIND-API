import React, { useState } from 'react';
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
<div className='m-auto bg-white rounded-lg shadow-lg 
                sm:max-w-[400px] 
                md:max-w-[700px] 
                lg:min-w-[50%] mt-6'>


  <div className='container flex flex-row rounded-lg 
                  sm:flex-col sm:max-w-[400px]
                  md:max-w-[700px]'>
        
    <div className='px-8 sm:px-4 md:px-8 '><Search cardSearched ={cardSearched} setCardSearched ={setCardSearched}  /></div>
  
    <div className='container grid w-9/12 border-b-2 border-t-2  border-violet-500 overflow-auto px-4 py-2 max-h-[640px] 
                    xsm:grid-cols-1 xsm:max-w-[350px]
                    sm:max-h-[350px] sm:px-2 sm:w-11/12 sm:grid-cols-2 sm:max-w-[380px]
                    md:flex-row md:grid-cols-4 md:max-w-[640px]
                    xl:grid-cols-4 '>

      {cardSearched.map((card) => (
        <div key={card.name}>
          <img onClick={() => displayDetails(card)} 
               className='h-[250px] w-[150px] mt-2 ml-2 transition duration-500 delay-50 rounded 
                          hover:-translate-y-1 hover:scale-105 hover:shadow-xl' 
               src={ CardPhotos[card.name] || ""}
               alt={`Photo of ${card.name}`}
         />
        </div>   
      ))}
    </div>

    <CardDetails card={cardClicked} />

  </div>


</div>
</>
  )
}