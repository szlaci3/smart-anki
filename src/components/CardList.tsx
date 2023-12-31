import React, { useState } from 'react';
import Card from './Card';
import { rand } from '@/utils/utils';

function CardList({ cards, onRateCard }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(() =>
    rand(cards.length),
  );

  const handleRateCard = (rating) => {
    onRateCard(cards[currentCardIndex], rating);
    setCurrentCardIndex((prev) => rand(cards.length, prev));
  };

  const currentCard = cards[currentCardIndex];

  return (
    <div className="card-list">
      {currentCard && <Card card={currentCard} onRateCard={handleRateCard} />}
    </div>
  );
}

export default CardList;
