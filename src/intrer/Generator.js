import React, { useState } from 'react';

// Sample deck of cards
const deck = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

// Function to shuffle an array (deck in our case)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Component to generate cards
function Generator() {
    // State to hold the cards
    const [cards, setCards] = useState([]);

    // Function to generate cards
    const generateCards = () => {
        // Shuffle the deck
        const shuffledDeck = shuffleArray(deck);
        // Get the first 5 cards from the shuffled deck
        const selectedCards = shuffledDeck.slice(0, 5);
        // Update state with the selected cards
        setCards(selectedCards);
    };

    return (
        <div>
            <button onClick={generateCards}>Generate Cards</button>
            <div>
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        {card}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Generator;
