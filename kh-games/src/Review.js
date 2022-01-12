import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Data
import { getReview, postLike } from "./utils/api";

const Review = () => {
  const { reviewId } = useParams();
  const [review, setReview] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    getReview(reviewId)
      .then((data) => {
        setReview(data.review);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    postLike();
  });

  const handleOnClick = () => {};

  return (
    <>
      <h1>{review.title}</h1>
      <img src={review.review_img_url} />
      <p>{review.review_body}</p>
      <button onClick={handleOnClick}>👍</button>
      <button onClick={handleOnClick}>👎</button>
      <p>{review.votes}</p>
    </>
  );
};

export default Review;
