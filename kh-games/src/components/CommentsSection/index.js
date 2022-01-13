import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
import dayjs from "dayjs";

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

const Comments = ({ reviewId }) => {
  const username = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");

  useEffect(() => {
    getComments(reviewId)
      .then((data) => {
        setComments(data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(body, username, reviewId)
      .then(({ comment }) => {
        console.log(comment);
        setComments((currComments) => {
          const comments = [...currComments, comment];
          return comments;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <CommentsWrapper>
      <CommentsContainer>
        <CommentForm onSubmit={handleSubmit}>
          <FormContent>
            <label></label>
            <textarea
              onChange={handleBodyChange}
              value={body}
              placeholder="Speak your truth"
            ></textarea>
          </FormContent>
          <CommentButton>Post</CommentButton>
        </CommentForm>

        {comments.map((comment) => (
          <CommentsGrid key={comment.comment_id} comment={comment} />
        ))}
      </CommentsContainer>
    </CommentsWrapper>
  );
};

export default Comments;
