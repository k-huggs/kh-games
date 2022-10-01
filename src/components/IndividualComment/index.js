import React, { useState, useContext} from "react";
import { UserContext } from "../../UserContext";

// Styles
import {
  CommentsBtn,
  CommentsContent,
  CommentsWrapper,
} from "./IndividualComment.styles";

// Data
import { patchCommentLikes } from "../../utils/api";

// Component
import DeleteComment from "../DeleteComment";

const CommentsGrid = ({ comment, handleDelete }) => {
  const [likes, setLikes] = useState(comment.votes);
  const [loading, setLoading] = useState(false);
  const { user, isLoggedIn } = useContext(UserContext);
  const [isLikeClicked, setIsLikeClicked] = useState(false)
  const [isDislikeClicked, setIsDislikeClicked] = useState(false)

  const handleLikeClick = () => {
    setLoading(true);
    setLikes((currLikes) => {
      return currLikes + 1;
    });
    setIsLikeClicked(true)
    setIsDislikeClicked(false)
    patchCommentLikes(comment.comment_id, 1)
      .then((res) => {
        setLoading(false);
        return res;
      })
      .catch((error) => {
        throw(error)
      });
  };

  const handleDislikeClick = () => {
    setLoading(true);
    setLikes((currLikes) => {
      return currLikes - 1;
    });
    setIsLikeClicked(false)
    setIsDislikeClicked(true)
    patchCommentLikes(comment.comment_id, -1)
      .then((res) => {
        setLoading(false);
        return res;
      })
      .catch((error) => {
       throw(error);
      });
  };

  return (
    <CommentsWrapper>
      <CommentsContent>
        <h3>{comment.author}</h3>
        <p className="body">{comment.body}</p>
        <p>Date Created: {comment.created_at.split("T")[0]}</p>
        <p>Likes: {likes}</p>
       {isLoggedIn ? <CommentsBtn>
           {isLikeClicked ? <button
            className="like disable"
            onClick={handleLikeClick}
            disabled
          >
            ♥️
          </button> : <button
            className="like"
            onClick={handleLikeClick}
            
          >
            ♥️
          </button>}
          {isDislikeClicked ? <button
            className="dislike"
            onClick={handleDislikeClick}
            disabled
          >
            🥱
          </button> :  <button
            className="dislike"
            onClick={handleDislikeClick}
            
          >
            🥱
          </button>}
        </CommentsBtn>: null}
        {comment.author === user.username ? (
          <DeleteComment
            className="delete"
            commentId={comment.comment_id}
            handleDelete={handleDelete}
          />
        ) : null}
      </CommentsContent>
    </CommentsWrapper>
  );
};

export default CommentsGrid;
