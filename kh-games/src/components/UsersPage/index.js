import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Data
import { getUsers } from "../../utils/api";

// Styles
import { UserWrapper, UserContent } from "./UsersPage.styles";

// Components
import Spinner from "../Spinner";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <UserWrapper>
      <UserContent>
        {users.map((user) => (
          <Link to={`/users/${user.username}`}>
            <div key={user.username}>
              <h2>{user.username}</h2>
              <h3>{user.name}</h3>
              <img src={user.avatar_url} />
            </div>
          </Link>
        ))}
      </UserContent>
      {loading && <Spinner />}
    </UserWrapper>
  );
};

export default UsersPage;
