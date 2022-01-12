import React, { useState, useEffect } from "react";

// Styles
import { ReviewWrapper, ReviewContent } from "./ReviewPage.styles";

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
      <ReviewContent>
        <h1>Reviews Page</h1>
        <div>
          <select onChange={handleSortByChange}>
            Sort By:
            <option value={"created_at"}>Created Date</option>
            <option value={"comment_count"}>Comment Count</option>
            <option value={"votes"}>Votes</option>
            <option value={"owner"}>Author</option>
          </select>
        </div>
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

        <Grid reviews={reviews} clickable />
      </ReviewContent>
    </ReviewWrapper>
  );
};

export default ReviewsPage;
