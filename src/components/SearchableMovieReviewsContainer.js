import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'yUuGErfd96BT15cluICKMqWz4klFgF2G';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
<<<<<<< HEAD
          <strong>Search for a Movie:</strong>
          <br />
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={event => this.handleSearch(event)}
          />
          <br />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}



=======
          <input type="text"
                  name="search"
                  onChange={event => this.setState({searchTerm: event.target.value})}
                  value={this.state.search}>
          </input>
          <button type="submit">Submit</button>
        </form>
        { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

>>>>>>> c23f223a002b55000e3185e63c5f8b4e4d3aa4d1
export default SearchableMovieReviewsContainer