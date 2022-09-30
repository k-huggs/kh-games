import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Data
import { getUserByUsername, getReviews } from "../../utils/api";

// Components
import Spinner from "../Spinner";

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(user)

  useEffect(() => {
    setLoading(true);
    getUserByUsername(username)
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch((error) => {
        throw(error);
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
  }, [username]);

  return (
    <div>
      <img src={user.avatar_url} alt={`${user.username} avatar`} />
      <h1>{user.username}</h1>
      <main>
        {reviews.map((review) => (
          <section>
            <h1>{review.title}</h1>
            <p>{review.review_body}</p>
          </section>
        ))}
      </main>
      {loading && <Spinner />}
    </div>
  );
};

export default User;
