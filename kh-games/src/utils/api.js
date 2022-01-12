import axios from "axios";

const gameApi = axios.create({
  baseURL: "https://khncgames.herokuapp.com/api",
});

export const getReviews = () => {
  return gameApi.get("/reviews").then((res) => {
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
  // console.log(username, name, avatarUrl);
  return gameApi
    .post("/users", { username: username, name: name, avatar_url: avatar_url })
    .then((res) => {
      return res;
    })
    .catch((error) => {});
};

export const postLike = (reviewId, { inc_votes }) => {
  return gameApi.post(`/reviews/${reviewId}`, { inc_votes }).then((res) => {
    console.log(res);
    return res;
  });
};
