import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
// Data
import { patchCommentLikes, deleteComment } from "../../utils/api";

const CommentsGrid = ({ comment }) => {
  const [likes, setLikes] = useState(0);

  const { user } = useContext(UserContext);

  const handleLikeClick = (commentId) => {
    setLikes((currLikes) => {
      return currLikes + 1;
    });
    patchCommentLikes(commentId, 1)
      .then((res) => {
        console.log(res, "<<<< like patch");
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDislikeCLick = (commentId) => {
    setLikes((currLikes) => {
      return currLikes - 1;
    });
    patchCommentLikes(commentId, -1)
      .then((res) => {
        console.log(res, "<<<< dislike patch");
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div key={comment.comment_id}>
      <h3>{comment.author}</h3>
      <p>{comment.body}</p>
      <p>{comment.created_at.split("T")[0]}</p>
      <p>{comment.votes + likes}</p>
      <button
        onClick={(event) => {
          event.preventDefault();
          handleLikeClick(comment.comment_id);
        }}
        disabled={likes === 1}
      >
        ♥️
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          handleDislikeCLick(comment.comment_id);
        }}
        disabled={likes === 0}
      >
        🥱
      </button>
      {comment.author === user.username ? (
        <button
          onClick={(event) => {
            deleteComment(comment.comment_id);
          }}
        >
          Delete
        </button>
      ) : null}
    </div>
  );
};

// setNewDelete(...data);
// spread into new array and then remove from array. - update state locally.
// render button just for the user.
export default CommentsGrid;
