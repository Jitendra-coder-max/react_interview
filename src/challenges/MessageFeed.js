import React, { useState } from 'react';
// import './MessageFeed.css';

const MessageFeed = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event) => {
        // Check if the pressed key is Shift + Enter
        if (event.shiftKey && event.key === 'Enter') {
            event.preventDefault(); // Prevents adding a new line in the textarea
            if (inputValue.trim() !== '') {
                // Add the new message to the message feed
                setMessages([...messages, inputValue.trim()]);
                setInputValue(''); // Clear the input field
            }
        }
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="message-feed">
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message}
                    </div>
                ))}
            </div>
            <textarea
                className="message-input"
                placeholder="Type your message here..."
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default MessageFeed;
