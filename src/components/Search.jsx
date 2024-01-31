import { useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

const URL = 'https://tarotapi.dev/api/v1/cards/search';

export default function Search( { setCardSearched }) {
    // query for search
    const [query, setQuery] = useState("");
    // type of search
    const [type, setType] = useState('?q=')
    // state of filter pop-up menu
    const [isOpen, setIsOpen] = useState(false)
    // fetch search information from api
    useEffect(() => {
        async function searchFetch() {
            try {
                const res = await fetch(`${URL}${type}${query}`)
                const data = await res.json()
                setCardSearched(data.cards || []);
            } catch(error) {
                console.log('Error fetching search' + error)
                }
        }
        
        searchFetch();

    }, [query])
    // handles the search type when clicking one of the filter buttons
    // and clears the query when changing the filter
    function changeFilter(value) {
            setQuery('')
            setType(value) 
    }

    return (
<> 
<div className="flex mt-14 mb-2 px-8 py-8 
                    sm:px-4 sm:py-2 "> 
    <input  className="text-md block px-3 py-2 mt-2 rounded-lg bg-white border-2 border-violet-500 transition-all duration-200
                       sm:px-4 sm:max-w-[300px]
                     focus:bg-white focus:border-violet-700 focus:scale-[101%] focus:shadow-lg focus:outline-none" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}  
            placeholder="search something" 
            type="text" />
    <div className="relative flex flex-row items-center  min-w-[200px] rounded-lg">
            <button className="flex flex-row justify-center items-center gap-1 ml-1" 
                    onClick={() => setIsOpen((prev) => !prev)}>
                    {!isOpen ? ( <FaFilter /> ) : ( <FiFilter /> )}
            </button>
    {isOpen && (
        <div className="absolute bottom-[60px] right-[260px] flex flex-row item-start animate-fade duration-100 shadow-md rounded-lg backdrop-blur-lg  p-2 w-full
                        sm:right-[200px] sm:bottom-[45px] sm:shadow-none
                        border-l-2 border-t-2 border-r-2 border-violet-500
                        bg-gradient-to-br from-[#ffffffa8] to-[#ffffff86]  "> 
                       
            <button className="transition-colors duration-300 cursor-pointer rounded-lg border-l-transparent p-1 
                             hover:bg-gray-700 hover:text-white "  
                    value="?q=" 
                    onClick={(e) => changeFilter(e.target.value)}>name
            </button>

            <button className="transition-colors duration-300 cursor-pointer rounded-lg border-l-transparent p-1 
                             hover:bg-gray-700 hover:text-white "  
                    value="?suit=" 
                    onClick={(e) => changeFilter(e.target.value)}>suit
            </button>

            <button className="transition-colors duration-300 cursor-pointer rounded-lg border-l-transparent p-1 
                             hover:bg-gray-700 hover:text-white "  
                    value="?value=" 
                    onClick={(e) => changeFilter(e.target.value)}>value
            </button>

            <button className="transition-colors duration-300 cursor-pointer rounded-lg border-l-transparent p-1 
                             hover:bg-gray-700 hover:text-white "  
                    value="?type=" 
                    onClick={(e) => changeFilter(e.target.value)}>type
            </button>

        </div>
    )}
    </div>
</div>
    
</>
)}