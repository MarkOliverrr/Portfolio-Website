// src/components/Starfield.jsx
import React from 'react';

/**
 * Component to create a random falling star (meteor) effect.
 * @param {object} props - Component properties.
 * @param {number} [props.shootingStarCount=5] - Number of falling stars to display.
 * @returns {JSX.Element}
 */
const Starfield = ({ shootingStarCount = 5 }) => {
  // Create an array of falling star elements based on the given count
  const shootingStars = Array.from({ length: shootingStarCount }).map((_, i) => (
    <div
      key={`shooting-star-${i}`}
      className="shooting-star"
      style={{
        // Random initial position on the screen
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 100}%`,
        // Random animation duration between 1-3 seconds
        animationDuration: `${Math.random() * 2 + 1}s`,
        // Random animation delay between 1-6 seconds
        animationDelay: `${Math.random() * 5 + 1}s`,
      }}
    />
  ));

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {shootingStars}
    </div>
  );
};

export default Starfield;
