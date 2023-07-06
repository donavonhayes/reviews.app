import React from 'react';
import Stars from './stars';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewContent: props.reviewContent,
            stars: props.stars,
        }

    }


    render() {
        return (
            <div>
                <span>{this.state.reviewContent}</span>
                <Stars rating={this.state.stars} />
            </div>
        );
    }
}

export default Review;