import React, { useState, useEffect } from "react";

// Styles
import { ReviewWrapper, ReviewContent } from "./ReviewPage.styles";

// Data
import { getReviews } from "../../utils/api";
import { getCategories } from "../../utils/api";

//components
import Grid from "../Grid";

//Filter by different sorts!
//sort_by - created_at, comment count, owner
// loading

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log(sortBy, category, order);
    getReviews(sortBy, category, order)
      .then((data) => {
        setReviews(data.reviews);
        console.log(data.reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sortBy, category, order]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  });

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
      <ReviewContent>
        <h1>Reviews Page</h1>
        <div>
          <select onChange={handleSortByChange}>
            Sort By:
            <option value={"comment_count"}>Comments Count</option>
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
          </select>
        </div>
        <select onChange={handleOrderChange}>
          Order
          <option value={"ASC"}>Ascending</option>
          <option value={"DESC"}>Descending</option>
        </select>

        <Grid reviews={reviews} clickable />
      </ReviewContent>
    </ReviewWrapper>
  );
};

export default ReviewsPage;
