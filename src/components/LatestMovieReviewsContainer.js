import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
<<<<<<< HEAD
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));
=======
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
>>>>>>> c23f223a002b55000e3185e63c5f8b4e4d3aa4d1
  }

  render() {
    return (
      <div className="latest-movie-reviews">
<<<<<<< HEAD
        <h2>Latest Reviews:</h2>
=======
        <h2>The Latest Reviews:</h2>
>>>>>>> c23f223a002b55000e3185e63c5f8b4e4d3aa4d1
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;