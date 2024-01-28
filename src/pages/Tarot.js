import { useState } from "react";
import Navbar from "../components/Navbar"
import PlayingField from "../components/PlayingField"


export default function Tarot() {
        const [cardsDeck, setCardObtained] = useState([]);
        return ( 
                <>
                <div className="container">      
                <PlayingField setCardObtained={setCardObtained} cardsDeck={cardsDeck} />
                 
                </div>
                  
                
                </>

        )


}