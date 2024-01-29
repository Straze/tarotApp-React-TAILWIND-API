import { useEffect, useState} from "react"

const URL = "https://tarotapi.dev/api/v1"

export default function GenerateCards({ setCardObtained, finalState, setFinalState }) {

      // query type for api
      const [query, setQuery] = useState("")
      // has the button for obtaining the reading been clicked?
      const [buttonPressed, setButtonPressed] = useState(false)
      // array with the state of cards(reversed or not)
      const [cardState, setCardState] = useState([true, true, true, true, true, true, true, true, true, true])
      let counter = 0;
      // decided wether the card pulled is reversed or not
      const handleCardState = () => {
        cardState.forEach(state => {
            const revUp = Math.floor(Math.random() * 10)
            console.log(revUp)
              if (revUp > 5) {
              const tmpArray = cardState
              counter++
              tmpArray[counter] = false
              setCardState(tmpArray)

            } else if (revUp < 5) {
              const tmpArray = cardState
              counter++
              tmpArray[counter] = true
              setCardState(tmpArray)
              }
          });
           console.log(cardState)
           setFinalState(cardState)
        }

      //fetch from api
      useEffect(() => {
        async function fetchCards() {
          try {
            const res = await fetch(`${URL}${query}`);
            const data = await res.json();
            setCardObtained(data.cards);
            } catch (error) {
            console.error("Error fetching cards:", error);
            }
        }

      // get the cards 
      // reset buttonPressed so we can just click it again if we want to deal a new hand
      if(buttonPressed) {
        fetchCards();
        setButtonPressed(false);
      }
    }, [query, buttonPressed, setCardObtained]);

      // send cards back to the deck
      const resetCards = () => {
      setCardObtained([]); 
    };

    return (
        <>
<div className="container w-full mb-2 flex flex-row gap-3">
      {/* Get Reading button */}
    <button value={query} 
            onClick={(e)=> {
              setButtonPressed(true);
              setQuery("/cards/random?n=10");
              handleCardState();
              }
            } 
            className="shadow-md rounded-lg px-2 py-2 transition ease-in-out delay-100 duration-200 backdrop-blur-lg 
            hover:-translate-y-1 hover:scale-105 hover:bg-gray-300   
            text-gray-800 bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86]
            "> Get reading 
    </button>
      {/* Reset cards button */}
    <button onClick={resetCards}
             className="shadow-md rounded-lg px-2 py-2 transition ease-in-out delay-100 duration-200 backdrop-blur-lg 
            hover:-translate-y-1 hover:scale-105 hover:bg-gray-300   
            text-gray-800 bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86]
            ">
        Send cards back to the deck
    </button>
</div>

</>
    )

}