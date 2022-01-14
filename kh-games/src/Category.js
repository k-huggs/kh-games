import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

// Data
import { getReviews } from "./utils/api";

// Components
import Spinner from "./components/Spinner";

const Category = () => {
  const { categoryname } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReviews("created_at", categoryname, undefined).then((data) => {
      setReviews((currRevs) => {
        const reviews = data.reviews.filter((review) => {
          return review.category === categoryname;
        });
        setLoading(false);
        return reviews;
      });
    });
  }, []);

  return (
    <div>
      <h1> Category Page </h1>

      {reviews.map((review) => (
        <section>
          <h1>{review.title}</h1>
          <h3>{review.owner}</h3>
          <p>{review.review_body}</p>
        </section>
      ))}
      {loading && <Spinner />}
    </div>
  );
};

export default Category;
