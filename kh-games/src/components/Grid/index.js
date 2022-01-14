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
          {loading && <Spinner />}
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
      {loading && <Spinner />}
    </GridWrapper>
  );
};
export default Grid;
