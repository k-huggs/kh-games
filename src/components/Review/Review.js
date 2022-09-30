import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Data
import { getReview, patchReviewLikes } from "../../utils/api";

//Components
import Comments from "../CommentsSection";
import Spinner from "../Spinner";

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
        throw(error);
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
        throw(error);
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
        throw(error);
      });
  };

  return (
    <ReviewWrapper>
      <ReviewContent>
        <h2>{review.title}</h2>
        <img src={review.review_img_url} />
        <p className="body">{review.review_body}</p>
        <p>Likes: {review.votes + likes}</p>
        <ReviewVotes>
          {likes === 1 ? (
            <button
              className="liked"
              onClick={handleLikeClick}
              disabled={likes === 1}
            >
              👍
            </button>
          ) : (
            <button
              className="like"
              onClick={handleLikeClick}
              disabled={likes === 1}
            >
              👍
            </button>
          )}
          {likes === -1 ? (
            <button
              className="disliked"
              onClick={handleDislikeCLick}
              disabled={likes === -1}
            >
              👎
            </button>
          ) : (
            <button
              className="dislike"
              onClick={handleDislikeCLick}
              disabled={likes === -1}
            >
              👎
            </button>
          )}
        </ReviewVotes>
      </ReviewContent>
      <div>
        <Comments reviewId={reviewId} />
      </div>
      {loading && <Spinner />}
    </ReviewWrapper>
  );
};

export default Review;
