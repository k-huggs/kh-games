import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Data
import { getUserByUsername, getReviews } from "./utils/api";

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getUserByUsername(username)
      .then((data) => {
        setUser(data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  useEffect(() => {
    getReviews("created_at", "", "DESC").then((data) => {
      console.log(data, "<<<< get revs");
      setReviews((currRevs) => {
        const reviews = data.reviews.filter((reviews) => {
          return reviews.owner === username;
        });
        return reviews;
      });
    });
  }, []);

  return (
    <div>
      <img src={user.avatar_url} />
      <h1>{user.username}</h1>
      <div>
        {reviews.map((review) => (
          <section>
            <h1>{review.title}</h1>
            <p>{review.review_body}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default User;
