import React, { useState } from 'react';
import CardList from '@/components/CardList';
import { cards } from '@/data/cards';
import './index.less';

function App() {
  const [cardList, setCardList] = useState(cards);

  const handleRateCard = (cardId, rating) => {
    const updatedCardList = cardList.map((card) => {
      if (card.id === cardId) {
        const newRate = rating === '10minutes' ? 1 : rating;
        const newPrevView = Date.now();
        return { ...card, rate: newRate, prevView: newPrevView };
      }
      return card;
    });
    setCardList(updatedCardList);
  };

  return (
    <div className="App">
      <h1>SmartAnki</h1>
      <h3>Flashcard App</h3>
      <CardList cards={cardList} onRateCard={handleRateCard} />
    </div>
  );
}

export default App;
