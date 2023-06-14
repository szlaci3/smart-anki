import React, { useState } from 'react';

function Card({ card, onRateCard }) {
  const [revealCount, setRevealCount] = useState(0);

  const handleShowNextSide = () => {
    setRevealCount(revealCount + 1);
  };

  const handleRateCard = (rating) => {
    onRateCard(card.id, rating);
    setRevealCount(0);
  };

  return (
    <div className="card">
      <div>
        {card.sides.slice(0, revealCount + 1).map((side, index) => (
          <div
            key={index}
            className={`card-side ${
              index === card.sides.length - 1 ? 'back' : 'front'
            }`}
          >
            <h2>{side}</h2>
          </div>
        ))}
      </div>
      <div>
        {card.sides.length - 1 > revealCount && (
          <button
            type="button"
            className="show-button"
            onClick={handleShowNextSide}
          >
            {revealCount ? 'Show Next Side' : 'Show Answer'}
          </button>
        )}
        {revealCount > 0 && (
          <div className="rating-buttons">
            <button type="button" onClick={() => handleRateCard('10minutes')}>
              10 minutes
            </button>
            <button type="button" onClick={() => handleRateCard('1day')}>
              1 day
            </button>
            <button type="button" onClick={() => handleRateCard('3days')}>
              3 days
            </button>
            <button type="button" onClick={() => handleRateCard('7days')}>
              7 days
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
