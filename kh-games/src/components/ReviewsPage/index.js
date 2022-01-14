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
import Spinner from "../Spinner";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sort_by, setSortBy] = useState("created_at");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("DESC");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    console.log(sort_by, category, order);
    getReviews(sort_by, category, order)
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort_by, category, order]);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleOrderChange = (event) => {
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
              <option value={""}>All</option>
              {categories.map((category, index) => (
                <option key={index} value={category.slug}>
                  {category.slug}
                </option>
              ))}
            </select>
          </div>
          <select onChange={handleOrderChange}>
            Order:
            <option value={"DESC"}>Descending</option>
            <option value={"ASC"}>Ascending</option>
          </select>
        </ReviewContent>
        <Grid reviews={reviews} loading={loading} />
      </ReviewContainer>
    </ReviewWrapper>
  );
};

export default ReviewsPage;
