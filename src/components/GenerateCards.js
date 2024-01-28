import { useEffect, useState} from "react"

const URL = "https://tarotapi.dev/api/v1"

export default function GenerateCards({ setCardObtained }) {

        const [query, setQuery] = useState("")
        const [buttonPressed, setButtonPressed] = useState(false)

       useEffect(() => {
  async function fetchCards() {
    try {
      const res = await fetch(`${URL}${query}`);
      const data = await res.json();
      setCardObtained(data.cards);
      console.log(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }
  if(buttonPressed) {
  fetchCards();
   setButtonPressed(false);
  }
}, [query, buttonPressed, setCardObtained]);

    const resetCards = () => {
    setCardObtained([]); 
  };

    return (
        <>
        <div className="container w-9/12 px-2 py-2">
          <button  value={query} 
          onClick={(e)=> {
            setButtonPressed(true);
            setQuery("/cards/random?n=10");
            }
        } 
            className="transition  ease-in-out delay-100 text-gray-800 bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86] backdrop-blur-lg hover:-translate-y-1 hover:scale-105 hover:bg-gray-300 duration-200 shadow-md rounded px-2 py-2 "> Get reading </button>
        <button
        className='transition ml-2 ease-in-out delay-100 text-gray-800 bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86]  backdrop-blur-lg hover:-translate-y-1 hover:scale-105 hover:bg-gray-300 duration-200 shadow-md rounded px-2 py-2'
        onClick={resetCards}
      >
        Send cards back to the deck
      </button>

      
           </div>

        </>
    )

}