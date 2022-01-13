import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

// Data
import { getReviews } from "./utils/api";

const Category = () => {
  const { categoryname } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews("created_at", "", "DESC").then((data) => {
      console.log(data);
      setReviews((currRevs) => {
        const reviews = data.reviews.filter((review) => {
          return review.category === categoryname;
        });
        return reviews;
      });
    });
  }, []);
  console.log(categoryname, "<< category");
  console.log(reviews);

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
    </div>
  );
};

export default Category;
