import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
// Styles
import {
  CommentForm,
  CommentsContent,
  CommentsWrapper,
  CommentButton,
  FormContent,
} from "./CommentsSection.styles";

// Data
import {
  getComments,
  patchCommentLikes,
  postComment,
  deleteComment,
} from "../../utils/api";

const Comments = ({ reviewId }) => {
  const username = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(0);
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

  const handleLikeClick = () => {
    setLikes((currLikes) => {
      return currLikes + 1;
    });
    patchCommentLikes(comments.comment_id, 1)
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

    patchCommentLikes(comments.comment_id, -1)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  console.log(body);
  const handleSubmit = (event) => {
    postComment(body, username, reviewId)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleDeleteComment = () => {
  //   deleteComment(comments.comment_id)
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <CommentsWrapper>
      <CommentsContent>
        {comments.map((comment) => (
          <div key={comment.comment_id}>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p>{comment.votes + likes}</p>
            <p>{comment.created_at}</p>
            <button onClick={handleLikeClick} disabled={likes === 1}>
              ♥️
            </button>
            <button onClick={handleDislikeCLick} disabled={likes === -1}>
              🥱
            </button>

            <span>
              <button
                onClick={(event) => {
                  deleteComment(comment.comment_id);
                }}
                disabled={comment.author !== username}
              >
                Delete Comment
              </button>
            </span>
          </div>
        ))}
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
      </CommentsContent>
    </CommentsWrapper>
  );
};

export default Comments;
