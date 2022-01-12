import axios from "axios";

const gameApi = axios.create({
  baseURL: "https://khncgames.herokuapp.com/api",
});

export const getReviews = (sort_by, category, order) => {
  return gameApi
    .get(`/reviews/?sort_by=${sort_by}&category=${category}&order=${order}`, {
      sort_by: sort_by,
      category: category,
      order: order,
    })
    .then((res) => {
      console.log(res.data, "<<< Server Data");
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

export const patchLike = (reviewId, likes) => {
  return gameApi
    .patch(`/reviews/${reviewId}`, { inc_votes: likes })
    .then((res) => {
      return res.data.updatedReview;
    });
};
