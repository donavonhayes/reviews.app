import React, { useState } from 'react';

function ReviewForm() {
  const [reviews, setReviews] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const comment = formData.get('comment');
    const rating = formData.get('rating');
    const newReview = { username, comment, rating };
    setReviews([...reviews, newReview]);
  }

  return (
    <div className='card m-3'>
      <h6>Reviews</h6>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" name="username" type="text" required />
        </div><br/>
        <div>
          <label htmlFor="comment">Review:</label>
          <textarea id="comment" name="comment" required></textarea>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating" required>
            <option value="">Choose a rating</option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </div>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
      <ul className='card m-3'>
        {reviews.map((review, index) => (
          <li
            key={review.username}
            className={index % 2 === 0 ? 'userComments even' : 'userComments odd'}  /*class for styling*/
          >
            {review.username}: {review.comment} ({review.rating} stars)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewForm;