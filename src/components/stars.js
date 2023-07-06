import React from 'react';

class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: props.rating,
        }

    }


    render() {
        let rating = parseInt(this.state.rating);
        if (rating < 1 || rating > 5) {
            rating = 'Not a valid rating'
        }

        return (
            <div>
                <span>{"Stars: " + rating}</span>
            </div>
        );
    }
}

export default Stars;