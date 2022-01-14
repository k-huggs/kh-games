import React, { useState, useEffect } from "react";

// Data
import { getReviews } from "../utils/api";

export const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sort_by, setSortBy] = useState("created_at");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("DESC");

  useEffect(() => {
    setLoading(true);
    setError("");
    getReviews(sort_by, category, order)
      .then((data) => {
        setReviews(data.reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { reviews, loading, error };
};
