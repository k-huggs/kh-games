import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

// Data
import { getReviews } from "../../utils/api";

// Components
import Spinner from "../Spinner";

// Styles
import { CategoryWrapper, CategoryReviews } from "./Category.styles";

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
  }, [categoryname]);

  return (
    <CategoryWrapper>
      <h1>{categoryname} reviews</h1>
      {reviews.map((review) => (
        <Link to={`/reviews/${review.review_id}`} key={review.review_id}>
          <CategoryReviews >
            <h2>{review.title}</h2>
            <h3>Game Designed By {review.designer}</h3>
            <p>User {review.owner}</p>
            <p>Likes {review.votes}</p>
          </CategoryReviews>
        </Link>
      ))}
      {loading && <Spinner />}
    </CategoryWrapper>
  );
};

export default Category;
