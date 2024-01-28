import React, { useState, useEffect } from 'react';
import PlayingField from './PlayingField';
import TableTarot from './TableTarot';
import GenerateCards from './GenerateCards';

const URL = 'https://tarotapi.dev/api/v1/cards/random?n=10';

export default function ApiFetch() {
  const [cardsDeck, setCardObtained] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setCardObtained(data.cards);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    }

    fetchCards();
  }, []);

  return (
    <div className="container">
    
    </div>
  );
}