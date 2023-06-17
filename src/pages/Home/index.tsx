import React, { useState } from 'react';
import CardList from '@/components/CardList';
import { cards } from '@/data/cards';
import '../../index.less';

type Card = {
  id: number;
  sides: string[];
  rate: '10minutes' | number | null;
  reviewedAt: number | null;
};

function App() {
  const [cardList, setCardList] = useState<Card>(cards);

  const handleRateCard = (cardId, rate) => {
    setCardList((prev) =>
      prev.map((card: Card) => {
        if (card.id === cardId) {
          return { ...card, rate, reviewedAt: Date.now() };
        }
        return card;
      }),
    );
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
