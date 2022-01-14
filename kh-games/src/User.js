import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Data
import { getUserByUsername, getReviews } from "./utils/api";

// Components
import Spinner from "./components/Spinner";

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserByUsername(username)
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  useEffect(() => {
    setLoading(true);
    getReviews().then((data) => {
      setReviews((currRevs) => {
        const reviews = data.reviews.filter((reviews) => {
          return reviews.owner === username;
        });
        setLoading(false);
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
      {loading && <Spinner />}
    </div>
  );
};

export default User;
