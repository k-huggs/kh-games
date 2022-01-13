import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Data
import { getUsers } from "../../utils/api";

// Styles
import { UserWrapper, UserContent } from "./UsersPage.styles";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data.users);
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
    </UserWrapper>
  );
};

export default UsersPage;
