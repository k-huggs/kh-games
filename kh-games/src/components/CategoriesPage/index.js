import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Styles
import { CatWrapper, CatContent, CatCard } from "./CategoriesPage.styles";

// Data
import { getCategories } from "../../utils/api";
import { useReviews } from "../../hooks/useReviews";

// Components
import Spinner from "../Spinner";
import { createGlobalStyle } from "styled-components";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { reviews } = useReviews();

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data) => {
        setLoading(false);
        setCategories(data.categories);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(reviews);

  return (
    <CatWrapper>
      {loading && <Spinner />}
      <CatContent>
        {categories.map((category, index) => (
          <CatCard key={index} clickable>
            <h2>{category.slug}</h2>
            <p>{category.description}</p>
            <div>
              {reviews.filter((review) => {
                <>
                  return{" "}
                  {category.slug === review.category ? (
                    <p>review.title</p>
                  ) : null}
                </>;
              })}
            </div>
          </CatCard>
        ))}
      </CatContent>
    </CatWrapper>
  );
};

export default CategoriesPage;
