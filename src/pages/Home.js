import Navbar from "../components/Navbar"
import PlayingField from "../components/PlayingField"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


export default function Home() {

        return ( 
                <>
                <div className=" bg-gradient-to-br from-[#bb3a3a]/20  via-[#8e84ec] to-[#7c89f8]  h-screen ">
                <div className="container px-10 py-10 bg-gradient-to-br from-[#ffffff65] to-[#ffffff60] w-100 backdrop-blur-lg rounded-b-lg shadow-xl  w-11/12 h- flex flex-row justify-center">
                    <div className=" w-5/12   min-w-[300px] min-h-[300px] ">
                    <h1 className="md:text-4xl xl:text-6xl  animate-fadeLeft font-normal text-gray-800 text-stroke- xl:mt-[80px] xl:ml-[250px] md:mt-[50px] md:ml-[100px]">The place for all your <br/> <strong className="text-red-800">Tarot needs</strong></h1>
                    <p className="mb-5 text-2xl text-balance xl:mt-[10px] xl:ml-[250px] md:mt-[20px] text-gray-800 md:ml-[100px]">Get a free reading and see what the future has in store for you</p>
                    <a className="text-gray-50 text-lg  px-7 py-2 md:ml-[100px] xl:ml-[250px] xl:mt-[80px] animate-fade md:mt-[50px] mt-10 bg-blue-600 hover:bg-blue-700 rounded-full shadow-navShadow" href="/Tarot">Get your free reading</a>
                    <p className="xl:mt-[20px] xl:ml-[250px] md:mt-[10px] md:ml-[100px] w-8/12 md:text-md xl:text-lg text-red-800 opacity-50 text-balance">*Beware that finding out your future may have a strong emotional impact</p>
                    </div>
                    <div className="container animate-fade  w-4/12 min-w-[300px] min-h-[300px]">
                        <img className="animate-float -mt-10"src="photos/tarot-vectorportal.png" alt=""></img>
                    </div>
                </div>
                  </div>
                
                </>

        )


}