import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";

// Styles
import {
  CommentsBtn,
  CommentsContent,
  CommentsWrapper,
} from "./Comments.styles";

// Data
import { patchCommentLikes } from "../../utils/api";

// Component
import DeleteComment from "../DeleteComment";

const CommentsGrid = ({ comment, deleteComment, handleDelete }) => {
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  const handleLikeClick = (commentId) => {
    setLoading(true);
    setLikes((currLikes) => {
      return currLikes + 1;
    });
    patchCommentLikes(commentId, 1)
      .then((res) => {
        setLoading(false);
        return res;
      })
      .catch((error) => {
        throw(error)
      });
  };

  const handleDislikeCLick = (commentId) => {
    setLoading(true);
    setLikes((currLikes) => {
      return currLikes - 1;
    });
    patchCommentLikes(commentId, -1)
      .then((res) => {
        setLoading(false);
        return res;
      })
      .catch((error) => {
       throw(error);
      });
  };

  return (
    <CommentsWrapper key={comment.comment_id}>
      <CommentsContent>
        <h3>{comment.author}</h3>
        <p className="body">{comment.body}</p>
        <p>Date Created: {comment.created_at.split("T")[0]}</p>
        <p>Likes: {comment.votes + likes}</p>
        <CommentsBtn>
          <button
            className="like"
            onClick={(event) => {
              event.preventDefault();
              handleLikeClick(comment.comment_id);
            }}
            disabled={likes === 1}
          >
            ♥️
          </button>
          <button
            className="dislike"
            onClick={(event) => {
              event.preventDefault();
              handleDislikeCLick(comment.comment_id);
            }}
            disabled={likes === 0}
          >
            🥱
          </button>
        </CommentsBtn>
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
