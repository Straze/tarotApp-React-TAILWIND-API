import { useState } from "react";
import PlayingField from "../components/PlayingField"


export default function Tarot() {
        const [cardsDeck, setCardObtained] = useState([]);
        return ( 
                <>
                <div className="px-2">      
                <PlayingField setCardObtained={setCardObtained} cardsDeck={cardsDeck} />
                 
                </div>
                  
                
                </>

        )


}