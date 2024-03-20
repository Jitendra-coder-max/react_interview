import React, { useState, useEffect } from 'react';
import './progressBar.css'; // Import your CSS file for styling

const ProgressmyBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the progress every second
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval); // Stop the interval when progress reaches 100%
          return prevProgress;
        } else {
          return prevProgress + 10; // Increment progress by 10% every second
        }
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressmyBar;
