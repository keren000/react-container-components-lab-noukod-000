// Code MovieReviews Here
<<<<<<< HEAD
import React from 'react'

const Review = ({title, summary}) => {
  return (
    <div key={title} className="review">
      <hr></hr>
      <h2>{title}</h2>
      <h5><i>{summary}</i></h5>
    </div>
  )
}

const MovieReviews = ({reviews}) => (
  <div className="review-list">{reviews.map(Review)}</div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
=======
import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
>>>>>>> c23f223a002b55000e3185e63c5f8b4e4d3aa4d1
