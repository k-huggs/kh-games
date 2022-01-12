import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Data
import { getReview, patchLike } from "./utils/api";

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

  const handleLikeClick = () => {
    setLikes((currLikes) => {
      return currLikes + 1;
    });
    patchLike(reviewId, 1)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDislikeCLick = () => {
    setLikes((currLikes) => {
      return currLikes - 1;
    });

    patchLike(reviewId, -1)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>{review.title}</h1>
      <img src={review.review_img_url} />
      <p>{review.review_body}</p>
      <button onClick={handleLikeClick} disabled={likes === 1}>
        👍
      </button>
      <button onClick={handleDislikeCLick} disabled={likes === -1}>
        👎
      </button>
      <p>{review.votes + likes}</p>
    </>
  );
};

export default Review;
