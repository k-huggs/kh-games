import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "../../UserContext";

// Styles
import {
  CommentForm,
  CommentsContent,
  CommentsWrapper,
  CommentButton,
  FormContent,
  CommentsContainer,
} from "./CommentsSection.styles";

// Data
import { getComments, postComment, deleteComment } from "../../utils/api";
import CommentsGrid from "../CommentGrid";

// Components
import Spinner from "../Spinner";

const Comments = ({ reviewId }) => {
  const { user, isLoggedIn } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");
  const username = user.username;

  useEffect(() => {
    setLoading(true);
    getComments(reviewId)
      .then((data) => {
        setComments(data.comments);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    if (username === "" || username === undefined) {
      setError("Please Log In");
    }
    postComment(body, username, reviewId)
      .then(({ comment }) => {
        setComments((currComments) => {
          const comments = [...currComments, comment];
          setLoading(false);
          return comments;
        });
      })
      .catch((error) => {
        console.log();
        setError(error.response.data.msg);
        setLoading(false);
      });
  };

  const handleDelete = (commentId) => {
    deleteComment(commentId).then(() => {
      setComments((currComments) => {
        return currComments.filter((comment) => {
          return comment.comment_id !== commentId;
        });
      });
    });
  };

  return (
    <CommentsWrapper>
      {loading && <Spinner />}
      <CommentForm onSubmit={handleSubmit}>
        <FormContent>
          {error !== "" ? <p>{error}</p> : null}
          {isLoggedIn ? (
            <textarea
              onChange={handleBodyChange}
              value={body}
              placeholder="Please Leave A Comment!"
            ></textarea>
          ) : null}
        </FormContent>
        {isLoggedIn ? <CommentButton>Post</CommentButton> : null}
      </CommentForm>

      {comments.map((comment) => (
        <CommentsGrid
          key={comment.comment_id}
          comment={comment}
          handleDelete={handleDelete}
        />
      ))}
    </CommentsWrapper>
  );
};

export default Comments;
