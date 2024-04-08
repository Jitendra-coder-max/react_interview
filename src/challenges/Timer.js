


import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Retrieve currentTime from local storage or default to 0
    const storedTime = localStorage.getItem('timerStatus');
    const parseTime = storedTime ? parseInt(storedTime, 10) : 0;
    setCurrentTime(parseTime)
    //  const initialTimeElapsed = Date.now() - parsedTime;

    const intervalId = setInterval(() => {
      setCurrentTime(prevcurrentTime => {
        const newTime = prevcurrentTime + 1000; // Increment currentTime by 1000 milliseconds (1 second)
        localStorage.setItem('timerStatus', newTime.toString()); // Store newTime in local storage
        return newTime;
      });
    }, 1000); // Run every 1000 milliseconds (1 second)

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const sec = Math.floor(currentTime / 1000);
  const min = Math.floor(sec / 60);

  const seconds = (sec % 60).toString().padStart(2, '0');
  const minutes = (min % 60).toString().padStart(2, '0');

  return (
    <div>
      <p>Timer</p>
      <p>{minutes}:{seconds}</p>
    </div>
  );
};

export default Timer;

