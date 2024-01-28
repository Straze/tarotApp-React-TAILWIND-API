import { useEffect, useState } from "react"
import { IoFilterCircleOutline, IoFilterCircle } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
const URL = 'https://tarotapi.dev/api/v1/cards/search';
const TYPE = ['?q=', '?suit=','?value=', '?type=']

export default function Search( { cardSearched,setCardSearched }) {

    const [query, setQuery] = useState("");
    const [type, setType] = useState('?q=')
    const [isOpen, setIsOpen] = useState(false)

    console.log(type)
    useEffect(() => {
       async function searchFetch() {
        try {
            const res = await fetch(`${URL}${type}${query}`)
            const data = await res.json()
            console.log(data)
            setCardSearched(data.cards || []);
} catch(error) {
    console.log('Error fetching search' + error)
}
        }
        searchFetch();
    }, [query])

    function changeFilter(value) {
        setQuery('')
        setType(value) 
    }
    return (

              <>
              
               <div className="flex justify-center items-center mt-32 mb-2 ml-72 "> 
               
            <input className="text-md block px-3 py-2 rounded-lg  
            bg-white border-4 border-violet-500 shadow-lg
            focus:bg-white 
            focus:border-indigo-600  
            focus:outline-none" value={query} onChange={(e) => setQuery(e.target.value)}  placeholder="search something" type="text" />
           <div className="relative flex flex-row items-center  min-w-[200px] rounded-lg">
                <button className="flex flex-row justify-center items-center gap-1 ml-1" onClick={() => setIsOpen((prev) => !prev)}>
                      
                    {!isOpen ? (
                       <FaFilter />
                    ) : (
                        <FiFilter />
                    )}
                </button>
                {isOpen && (
            <div className=" absolute flex flex-row item-start  top-9 right-[260px] bg-gradient-to-br animate-fade duration-300 shadow-xl opacity-90 from-[#ffffffa8] to-[#ffffff86] w-100 backdrop-blur-lg rounded-lg p-2 w-full "> 
                       
               <button className="hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer rounded-lg border-l-transparent p-1 "  value="?q=" onClick={(e) => changeFilter(e.target.value)}>name</button>
               <button className="hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer rounded-lg border-l-transparent p-1 "  value="?suit=" onClick={(e) => changeFilter(e.target.value)}>suit</button>
               <button className="hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer rounded-lg border-l-transparent p-1 "  value="?value=" onClick={(e) => changeFilter(e.target.value)}>value</button>
               <button className="hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer rounded-lg border-l-transparent p-1 "  value="?type=" onClick={(e) => changeFilter(e.target.value)}>type</button>
                    </div>
                )}
                </div>
    </div>
    
          </>


    )
}