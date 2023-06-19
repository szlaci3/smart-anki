import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from '@/components/CardList';
import '../../index.less';

type Card = {
  id: number;
  sides: string[];
  rate: '10minutes' | number | null;
  reviewedAt: number | null;
};

function RateCards() {
  const [cardList, setCardList] = useState<Card[]>([]);

  useEffect(() => {
    axios
      .get('/api/cards')
      .then((response) => {
        setCardList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching flashcards:', error);
      });
  }, []);

  const handleRateCard = (card, rate) => {
    const updatedCardList = cardList.map((cardItem) => {
      if (card.id === cardItem.id) {
        return { ...cardItem, rate, reviewedAt: Date.now() };
      }
      return cardItem;
    });

    axios
      .put(`/api/cards/${cardId}`, {
        ...card,
        rate,
        reviewedAt: Date.now(),
      })
      .then(() => {
        setCardList(updatedCardList);
      })
      .catch((error) => {
        console.error('Error updating flashcard:', error);
      });
  };

  return (
    <div className="App">
      <h1>SmartAnki</h1>
      <h3>Flashcard App</h3>
      <CardList cards={cardList} onRateCard={handleRateCard} />
    </div>
  );
}

export default RateCards;
