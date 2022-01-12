import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Styles
import { CatWrapper, CatContent, CatCard } from "./CategoriesPage.styles";

// Data
import { getCategories } from "../../utils/api";

// Components
import Spinner from "../Spinner";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data) => {
        setLoading(false);
        console.log(data);
        setCategories(data.categories);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <CatWrapper>
      {loading && <Spinner />}
      <CatContent>
        {categories.map((category, index) => (
          <CatCard key={index} clickable>
            <h2>{category.slug}</h2>
            <p>{category.description}</p>
          </CatCard>
        ))}
      </CatContent>
    </CatWrapper>
  );
};

export default CategoriesPage;
