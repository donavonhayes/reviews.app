import React from 'react';
import ReviewForm from './reviewForm';
import Review from './review';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: props.movieTitle,
            reviews: [],
        }

        this.updateReviewList = this.updateReviewList.bind(this);
    }

    updateReviewList(review) {
        let tmpReviews = this.state.reviews;
        tmpReviews.push(review);
        this.setState({reviews: tmpReviews});
    }

    render() {
        let reviewComponents = this.state.reviews.map((review, key) => 
        <Review key={key} reviewContent={review.reviewContent} stars={review.stars}/>);

        return (
            <div>
                <h1>{this.state.movieTitle}</h1>
                {reviewComponents}
                <ReviewForm onClick={this.updateReviewList} movie={this.state.movieTitle} key={'review-form-' + this.state.movieTitle}/>
            </div>
        );
    }
}

export default Movie;