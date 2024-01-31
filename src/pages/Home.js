

export default function Home() {

        return ( 
<>
    <div className="m-auto w-11/12 flex flex-row px-10 py-10 rounded-b-lg shadow-xl backdrop-blur-lg bg-white/50">
                    
        <div className="w-6/12 min-w-[200px] min-h-[100px] 
                        sm:w-6/12">

            <h1 className="animate-fadeLeft font-normal text-gray-800
                           sm:text-xl
                           md:text-4xl md:mt-[50px] 
                           lg:ml-[100px] lg:text-5xl
                           xl:text-6xl xl:mt-[80px] xl:ml-[250px] 
                           ">The place for all your <br/> 
                           <strong className="text-red-800">Tarot needs</strong></h1>

            <p  className="mb-5 text-2xl text-balance text-gray-800
                           sm:text-sm
                           md:mt-[20px]
                           lg:ml-[100px] lg:text-lg
                           xl:mt-[10px] xl:ml-[250px] 
                           ">Get a free reading and see what the future has in store for you</p>

            <a  className="text-gray-50 text-lg  px-5 py-2 animate-fade mt-10 bg-blue-600 rounded-full shadow-navShadow
                            sm:ml-[10px] sm:mt-[10px] sm:text-sm
                            md:mt-[50px]
                            lg:ml-[100px] lg:text-lg
                            xl:ml-[250px] xl:mt-[80px]    
                          hover:bg-blue-700 " 
                           href="/Tarot">Free reading</a>
            <p className="mt-4 opacity-50 text-balance  text-red-800 
                          sm:text-sm
                          md:mt-[10px] md:text-md 
                          lg:ml-[100px] lg:text-md
                          xl:text-lg xl:mt-[20px] xl:ml-[250px]">*Beware that finding out your future may have a strong emotional impact</p>
        
        </div>
            
        <div className="m-auto animate-fade min-w-[150px] min-h-[200px]
                        xsm:hidden
                        sm:-ml-12
                        md:ml-2 md:block">
                
            <img className="animate-float -mt-20"src="photos/tarot-vectorportal.png" alt=""></img>
            
        </div>

    </div>
</>

        )


}