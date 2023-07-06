import React from 'react';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: props.movie,
            reviewContent: '',
            stars: '',
        }
        
        this.updateReview = this.updateReview.bind(this);
        this.updateStar = this.updateStar.bind(this);
        this.submitReview = this.submitReview.bind(this);
    }

    submitReview() {  
        this.props.onClick(this.state);

    }

    updateReview(event) {
        this.setState({ reviewContent: event.target.value })
    }

    updateStar(event) {
        this.setState({ stars: event.target.value })
    }

    render() {
        return (
            <div>
                <input id={this.state.movie + '-review'} type='text' placeholder='Leave Your Review Here!' onChange={this.updateReview}></input>
                <input id={this.state.movie + '-stars'} type='text'placeholder='Rating 1-5 Stars' onChange={this.updateStar}></input>
                <button onClick={this.submitReview}>Submit Review</button>
            </div>
        );
    }
}

export default ReviewForm;