import axios from "axios";

const gameApi = axios.create({
  baseURL: "https://khncgames.herokuapp.com/api",
});

export const getReviews = (sort_by, category, order) => {
  return gameApi
    .get(`/reviews/`, {
      sort_by: sort_by,
      category: category,
      order: order,
    })
    .then((res) => {
      return res.data;
    });
};

export const getReview = (reviewId) => {
  return gameApi.get(`/reviews/${reviewId}`).then((res) => {
    return res.data;
  });
};

export const getUsers = () => {
  return gameApi.get("/users").then((res) => {
    return res.data;
  });
};

export const getCategories = () => {
  return gameApi.get("/categories").then((res) => {
    return res.data;
  });
};

export const postUser = ({ username, name, avatar_url }) => {
  return gameApi
    .post("/users", { username: username, name: name, avatar_url: avatar_url })
    .then((res) => {
      return res;
    });
};

export const patchReviewLikes = (reviewId, likes) => {
  return gameApi
    .patch(`/reviews/${reviewId}`, { inc_votes: likes })
    .then((res) => {
      return res.data.updatedReview;
    });
};

export const getComments = (reviewId) => {
  return gameApi.get(`/reviews/${reviewId}/comments`).then((res) => {
    return res.data;
  });
};

export const patchCommentLikes = (commentId, likes) => {
  return gameApi
    .patch(`/comments/${commentId}`, { inc_votes: likes })
    .then((res) => {
      return res.data;
    });
};

export const postComment = (body, username, reviewId) => {
  return gameApi
    .post(`/reviews/${reviewId}/comments`, {
      username: username,
      body: body,
      review_id: reviewId,
    })
    .then((res) => {
      return res.data;
    });
};

export const deleteComment = (commentId) => {
  return gameApi.delete(`/comments/${commentId}`).then((res) => {
    return res.data;
  });
};

export const getUserByUsername = (username) => {
  return gameApi.get(`/users/${username}`).then((res) => {
    return res.data;
  });
};
