import React, { useState } from 'react';
import styled from 'styled-components';

const LabelFilter = () => {
  const animalData = [
    { id: 1, name: 'Cat', class: 'mammals' },
    { id: 2, name: 'Dog', class: 'mammals' },
    { id: 3, name: 'Elephant', class: 'mammals' },
    { id: 4, name: 'Eagle', class: 'birds' },
    { id: 5, name: 'Sparrow', class: 'birds' },
    { id: 6, name: 'Whale', class: 'mammals' },
    { id: 7, name: 'Tiger', class: 'mammals' },
    { id: 8, name: 'Penguin', class: 'birds' },
    { id: 9, name: 'Parrot', class: 'birds' },
  ];

  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleLabelClick = (label) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter((l) => l !== label));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  const filterAnimals = () => {
    if (selectedLabels.length === 0) {
      return animalData;
    } else {
      return animalData.filter((animal) => selectedLabels.includes(animal.class));
    }
  };

  return (
    <Wrapper>
      <h2>Animal Dashboard</h2>
      <div className="labels">
        <button
          data-testid="mammals-label"
          className={selectedLabels.includes('mammals') ? 'selected' : ''}
          onClick={() => handleLabelClick('mammals')}
        >
          Mammals
        </button>
        <button
          data-testid="birds-label"
          className={selectedLabels.includes('birds') ? 'selected' : ''}
          onClick={() => handleLabelClick('birds')}
        >
          Birds
        </button>
      </div>
      <div className="animals">
        {filterAnimals().map((animal) => (
          <div key={animal.id} className="animal-tile">
            {animal.name}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default LabelFilter;

const Wrapper = styled.div`
  text-align: center;

  .labels {
    margin-bottom: 20px;

    button {
      margin-right: 10px;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      background-color: #ccc;
      cursor: pointer;

      &.selected {
        color: #fff;
        background-color: #333;
      }
    }
  }

  .animals {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .animal-tile {
      padding: 10px;
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
`;
