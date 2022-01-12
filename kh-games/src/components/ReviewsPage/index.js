import React, { useState, useEffect } from "react";

// Styles
import { ReviewWrapper, ReviewContent } from "./ReviewPage.styles";

// Data
import { getReviews } from "../../utils/api";

//components
import Grid from "../Grid";

//Filter by different sorts!

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getReviews()
      .then((data) => {
        setReviews(data.reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ReviewWrapper>
      <ReviewContent>
        <h1>Reviews Page</h1>
        <Grid reviews={reviews} clickable />
      </ReviewContent>
    </ReviewWrapper>
  );
};

export default ReviewsPage;
