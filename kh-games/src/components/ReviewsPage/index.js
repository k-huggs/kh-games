import React, { useState, useEffect } from "react";

// Styles
import {
  ReviewWrapper,
  ReviewContent,
  ReviewContainer,
  ReviewSort,
} from "./ReviewPage.styles";

// Data
import { getReviews } from "../../utils/api";
import { getCategories } from "../../utils/api";

//components
import Grid from "../Grid";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [sort_by, setSortBy] = useState("created_at");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("DESC");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getReviews(sort_by, category, order)
      .then((data) => {
        setReviews(data.reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort_by, category, order]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSortByChange = (event) => {
    console.log(event.target.value, "<< sort event");
    setSortBy(event.target.value);
  };

  const handleCategoryChange = (event) => {
    console.log(event.target.value, "cate event");
    setCategory(event.target.value);
  };

  const handleOrderChange = (event) => {
    console.log(event.target.value, "order event");
    setOrder(event.target.value);
  };

  return (
    <ReviewWrapper>
      <ReviewContainer>
        <h1>Reviews</h1>
        <ReviewContent>
          <ReviewSort>
            <select onChange={handleSortByChange}>
              Sort By:
              <option value={"created_at"}>Created Date</option>
              <option value={"comment_count"}>Comment Count</option>
              <option value={"votes"}>Votes</option>
              <option value={"owner"}>Author</option>
            </select>
          </ReviewSort>
          <div>
            <select onChange={handleCategoryChange}>
              Category
              {categories.map((category, index) => (
                <option key={index} value={category.slug}>
                  {category.slug}
                </option>
              ))}
              <option value={""}>All</option>
            </select>
          </div>
          <select onChange={handleOrderChange}>
            Order:
            <option value={"DESC"}>Descending</option>
            <option value={"ASC"}>Ascending</option>
          </select>
        </ReviewContent>
        <Grid reviews={reviews} clickable />
      </ReviewContainer>
    </ReviewWrapper>
  );
};

export default ReviewsPage;
