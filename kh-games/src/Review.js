import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Data
import { getReview, patchReviewLikes } from "./utils/api";

//Components
import Comments from "./components/CommentsSection";
import Spinner from "./components/Spinner";

// Styles
import { ReviewContent, ReviewVotes, ReviewWrapper } from "./Review.style";

const Review = () => {
  const { reviewId } = useParams();
  const [review, setReview] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLoading(true);
    getReview(reviewId)
      .then((data) => {
        setReview(data.review);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLikeClick = () => {
    setLoading(true);
    setLikes((currLikes) => {
      return currLikes + 1;
    });
    patchReviewLikes(reviewId, 1)
      .then((res) => {
        setLoading(false);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDislikeCLick = () => {
    setLoading(true);
    setLikes((currLikes) => {
      return currLikes - 1;
    });
    patchReviewLikes(reviewId, -1)
      .then((res) => {
        setLoading(false);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ReviewWrapper>
      <ReviewContent>
        <h1>{review.title}</h1>
        <img src={review.review_img_url} />
        <p>{review.review_body}</p>
        <ReviewVotes>
          <button onClick={handleLikeClick} disabled={likes === 1}>
            👍
          </button>
          <button onClick={handleDislikeCLick} disabled={likes === -1}>
            👎
          </button>
          <p>Number of Likes {review.votes + likes}</p>
        </ReviewVotes>
      </ReviewContent>{" "}
      <div>
        <Comments reviewId={reviewId} />
      </div>
      {loading && <Spinner />}
    </ReviewWrapper>
  );
};

export default Review;
