import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {

      const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <nav className="border-gray-200 z-100  w-full bg-gray-50 dark:bg-blue-600 shadow-navShadow dark:border-gray-700">

             <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://i.pinimg.com/originals/c6/d3/45/c6d345d96038c2fb7230a64e992d1071.png" className="h-10 " alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tarotelini</span>
    </a>
    <ul className="flex flex-row gap-4 
                  xsm:hidden 
                  sm:hidden
                  lg:flex">
    <li><a className="text-gray-50 text-lg hover:text-gray-300 " href="/Tarot">Tarot</a></li>
    <li><a className="text-gray-50 text-lg hover:text-gray-300" href="/Cards">Cards</a></li>
    <li><a className="text-gray-50 text-lg hover:text-gray-300" href="/LearnMore">Learn More</a></li>
     <li> <a className="text-gray-50 text-lg hover:text-gray-300" href="/">Home</a></li>

   </ul>
   </div>
    <button className="sm:block lg:hidden absolute right-10 top-8" 
            onClick={() => setIsOpen((prev) =>!prev)}> 
            <span className={`${isOpen ? 'text-white' : 'text-black'}`}>< IoMdMenu /> </span>
    </button>
   {isOpen && (
       <div className="relative z-50 py-4 flex  flex-col  duration-300 animate-fade  bg-blue-600/50 backdrop-blur-md  text-left" >
    <div className="absolute w-full bg-blue-600   p-2">
      <ul className="font-medium flex overflow-hidden gap-1 flex-col p-1 md:p-0 border shadow-lg border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">  
      <li className="bg-blue-400 py-2 rounded-lg shadow-md "><a className="text-gray-50 text-lg hover:text-gray-300 px-2 " href="/Tarot">Tarot</a></li>
      <li className="bg-blue-400 py-2 rounded-lg shadow-md"><a className="text-gray-50 text-lg hover:text-gray-300 px-2" href="/Cards">Cards</a></li>
      <li className="bg-blue-400 py-2 rounded-lg shadow-md "><a className="text-gray-50 text-lg hover:text-gray-300 px-2" href="/LearnMore">Learn More</a></li>
      <li className="bg-blue-400 py-2 rounded-lg shadow-md "><a className="text-gray-50 text-lg hover:text-gray-300 px-2" href="/">Home</a></li> 
    </ul>
    </div>
   </div>
 
   )}
  
</nav>
          
</>

)
}