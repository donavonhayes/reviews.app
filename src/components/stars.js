import React, { useState } from 'react';

function Stars(props) {
  const { rating: initialRating, onChange } = props;
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`mx-1 ${index < rating ? 'text-warning' : 'text-gray'}`}
          style={{ cursor: 'pointer', fontSize: '1.5rem' }}
          onClick={() => handleStarClick(index)}
        >
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

export default Stars;