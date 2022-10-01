import React, { useState, useEffect } from "react";

// Styles
import {
  ReviewWrapper,
  ReviewContent,
  ReviewContainer,
  ReviewSort,
  ReviewButtonsSection
} from "./ReviewPage.styles";

// Data
import { getReviews } from "../../utils/api";
import { getCategories } from "../../utils/api";

//Components
import Grid from "../Grid";
import Spinner from "../Spinner";



const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort_by, setSortBy] = useState("created_at");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("DESC");
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const PAGE_LENGTH = 10;

  useEffect(() => {
    setLoading(true);
    getReviews(sort_by, category, order, page)
      .then((data) => {
        setReviews(data.reviews);
        setTotalCount(data.reviews.length)
        setLoading(false);
      })
      .catch((error) => {
      throw(error);
      });
  }, [sort_by, category, order, page]);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      })
      .catch((error) => {
        throw(error);
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

  const handlePreviousClick = (event) => {     
    setPage((currPage) => currPage - 1);
  }
  
  const handleNextClick = (event) => {
    setPage((currPage) => currPage + 1);
  }

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
              <option value={"votes"}>Likes</option>
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
        {loading ? <Spinner /> : <Grid setReviews={setReviews} reviews={reviews} loading={loading} />}
      </ReviewContainer>
      <ReviewButtonsSection>
        <button id="previous"
          onClick={handlePreviousClick} 
          disabled={page === 1}
        >
          Previous
        </button>
        <button id={"next"}
          onClick={handleNextClick}
          disabled={PAGE_LENGTH > totalCount}
        >
          Next
        </button>
        </ReviewButtonsSection>
    </ReviewWrapper>
  );
};

export default ReviewsPage;
