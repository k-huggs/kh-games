import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Styles
import { CatWrapper, CatCard } from "./CategoriesPage.styles";

// Data
import { getCategories } from "../../utils/api";
import { useReviews } from "../../hooks/useReviews";

// Components
import Spinner from "../Spinner";

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
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <CatWrapper>
      {loading && <Spinner />}
      {categories.map((category, index) => (
        <Link to={`/categories/${category.slug}`}>
          <CatCard key={index}>
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
        </Link>
      ))}
    </CatWrapper>
  );
};

export default CategoriesPage;
