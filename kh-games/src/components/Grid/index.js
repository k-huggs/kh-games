import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
// Styles
import { GridWrapper, GridContent } from "./Grid.style";
const PAGE_LENGTH = 5;

const Grid = ({ reviews, clickable }) => {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  //set the total count to 0 and get this back from the api,

  return (
    <GridWrapper>
      {reviews.map((review) => (
        <Link to={`/reviews/${review.review_id}`}>
          <GridContent key={review.id}>
            <h3>{review.title}</h3>
            <img
              src={review.review_img_url}
              className="cards-img"
              alt="review-img"
            />
          </GridContent>
        </Link>
      ))}
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
      {/* <button
        onCLick={setPage((currPage) => currPage - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        onClick={setPage((currPage) => currPage + 1)}
        disabled={PAGE_LENGTH * page >= totalCount}
      >
        Next
      </button> */}
    </GridWrapper>
  );
};
export default Grid;
