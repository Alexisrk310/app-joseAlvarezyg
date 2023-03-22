import React from 'react';
import { useState } from 'react';

const StarRating = ({ rating  } : any) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (rating : any) => {
    setHoverRating(rating);
  }

  const handleMouseLeave = () => {
    setHoverRating(0);
  }

  const handleClick = (rating : any) => {
    alert(`You clicked rating ${rating}!`);
  }

  const renderStar = (rating : any, index: number) => {
    console.log("Rating", rating);
    
    const filled = rating <= (hoverRating || rating);
    const className = filled ? 'fa fa-star' : 'fa fa-star-o';

    return (
      <i
        key={index}
        className={className}
        onMouseEnter={() => handleMouseEnter(rating)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(rating)}
      ></i>
    );
  }

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value, index) => renderStar(rating, index))}
    </div>
  );
};

export default StarRating;