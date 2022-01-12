import { useState, useEffect } from "react";

//Data
import { getUsers } from "../utils/api";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);
    getUsers()
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  });

  return { users, loading, error };
};
