import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index.less';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';

const EditCard = () => {
  const [sides, setSides] = useState<string[]>(['', '']);
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams(); // Get the card ID from the URL

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(`${SERVERIP}/card/${id}`);
        setCard(response.data);
      } catch (err) {
        setError('Error fetching card data');
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const { Title } = Typography;

  const handleAddSide = () => {
    if (sides.length < 10) {
      setSides([...sides, '']);
    }
  };

  const handleSideChange = (index, value) => {
    const updatedSides = [...sides];
    updatedSides[index] = value;
    setSides(updatedSides);
  };

  const handleSubmit = async () => {
    try {
      const card = {
        id,
        sides: JSON.stringify(sides),
        rate: null,
        reviewedAt: null,
      };

      await axios.post(`${SERVERIP}/cards/${id}`, card);
    } catch (error) {
      console.error('Error creating card:', error);
    }
    setSides(['', '']);
  };

  return (
    <div>
      {card && (
        <div className="card-form" key={id}>
          <Title>Editing Card</Title>
          <Title level={2}>Card ID: {card.id}</Title>
          <Title level={3}>Card Sides:</Title>

          {sides.map((side, index) => {
            let label;
            switch (index) {
              case 0:
                label = 'Front Side';
                break;
              case 1:
                label = 'Back Side';
                break;
              default:
                label = `Side ${index + 1}:`;
            }

            return (
              <div key={index}>
                <label>{label}</label>
                <input
                  type="text"
                  value={side}
                  onChange={(e) => handleSideChange(index, e.target.value)}
                />
              </div>
            );
          })}

          <div>
            <button type="button" onClick={handleAddSide}>
              Add Side
            </button>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCard;
