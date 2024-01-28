

export default function Navbar() {

    return (
      <>
        <nav className="border-gray-200 z-100 bg-gray-50 dark:bg-blue-600 shadow-navShadow dark:border-gray-700">

             <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://i.pinimg.com/originals/c6/d3/45/c6d345d96038c2fb7230a64e992d1071.png" className="h-10 " alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tarotelini</span>
    </a>
    <ul className="flex flex-row gap-4 ">

    <li><a className="text-gray-50 text-lg hover:text-gray-300 " href="/Tarot">Tarot</a></li>
    <li><a className="text-gray-50 text-lg hover:text-gray-300" href="/Cards">Cards</a></li>
    <li><a className="text-gray-50 text-lg hover:text-gray-300" href="/LearnMore">Learn More</a></li>
     <li> <a className="text-gray-50 text-lg hover:text-gray-300" href="/">Home</a></li>

   </ul>
 </div>
</nav>
          
      </>

    )

}