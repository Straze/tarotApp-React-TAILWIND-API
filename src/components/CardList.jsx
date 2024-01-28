import CardPhotos from "./CardPhotos"

export default function CardList({cardsDeck}) {
    
    return <div className="bg-blue-100 flex flex-row  text-center px-1 py-1">
        
        {Array.isArray(cardsDeck.cards) ? (
      cardsDeck.cards.map((card) => 
      <div className='container flex flex-col ' key={card.name}>
        
      <h1 className="text-red-800 bg-gray-300  rounded-md">{card.name}</h1> 
       <img src={CardPhotos[card.name] || ""}
        alt={`Photo of ${card.name}`}
        />
      <h3 className="text-gray-700">{card.meaning_up}</h3>
       
  </div>
  )
    ) : (
      <p></p>
    )}
    </div>
}