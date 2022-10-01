import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import { GridWrapper, GridContent } from "./Grid.style";

// Components
import Spinner from "../Spinner";



const Grid = ({ reviews, loading }) => {
  
  
  return (
    <GridWrapper>
      {reviews.map((review, index) => (
        <Link to={`/reviews/${review.review_id}`} key={review.review_id}>
          <GridContent >
            <h3>{review.title}</h3>
            <p>{review.designer}</p>
            <img
              src={review.review_img_url}
              className="cards-img"
              alt="review-img"
            />
            <p>Comments: {review.comment_count}</p>
            <p>Likes: {review.votes}</p>
            <p>Category: {review.category}</p>
          </GridContent>
        </Link>
      ))}
    
    </GridWrapper>
  );
};
export default Grid;
