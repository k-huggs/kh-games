import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import { GridWrapper, GridContent } from "./Grid.style";
// Components
import Spinner from "../Spinner";

const PAGE_LENGTH = 5;

const Grid = ({ reviews, loading }) => {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  return (
    <GridWrapper>
      {reviews.map((review, index) => (
        <Link to={`/reviews/${review.review_id}`}>
          <GridContent key={review.review_id}>
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
          {loading && <Spinner />}
        </Link>
      ))}
      <div>
        <button
          onClick={(event) => {
            setPage((currPage) => currPage - 1);
          }}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={(event) => {
            setPage((currPage) => currPage + 1);
          }}
          disabled={PAGE_LENGTH * page >= totalCount}
        >
          Next
        </button>
      </div>
      {loading && <Spinner />}
    </GridWrapper>
  );
};
export default Grid;
