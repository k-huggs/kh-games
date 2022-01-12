import React from "react";
import { Link } from "react-router-dom";
// Styles
import { GridWrapper, GridContent } from "./Grid.style";

const Grid = ({ reviews, clickable }) => {
  return (
    <GridWrapper>
      {reviews.map((review) => (
        <Link to={`/reviews/${review.review_id}`}>
          <GridContent key={review.id}>
            <h3>{review.title}</h3>
            <img src={review.review_img_url} alt="review-img" />
          </GridContent>
        </Link>
      ))}
    </GridWrapper>
  );
};
export default Grid;
