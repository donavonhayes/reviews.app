import React, { useState } from 'react';
import Stars from './Stars';
import ReviewForm from './ReviewForm';


function Movie(props) {
  const { title, imageUrl, synopsis } = props.movie;
  const [reviews, setReviews] = useState(props.movie.reviews || []);

  const addReview = (username, rating, comment) => {
    const newReview = { username, rating, comment };
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageUrl} alt={title} style={{height:"450px", width: "300px"}} /> 
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{synopsis}</p>
            <div className="d-flex align-items-center">
              <Stars rating={props.movie.rating} onChange={(rating) => console.log('New rating:', rating)} />
              <span className="ms-2">{props.movie.rating.toFixed(1)}</span>
            </div>
            
            <ReviewForm onAddReview={addReview} />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;


