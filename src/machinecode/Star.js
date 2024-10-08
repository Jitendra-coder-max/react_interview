import React, { useState } from "react";
import "./star.css";
const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="Rating_star">
      Star
      <h1>Star Ratings</h1>
      <div>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            onClick={() => setRating(num)}
            onMouseOver={() => setHover(num)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={`star ${num <= (rating || hover) ? "on" : "off"}`}>
              &#9734;
              {/* &star; */}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Star;
