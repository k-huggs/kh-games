import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Data
import { getUsers } from "../../utils/api";

// Styles
import {
  UserWrapper,
  UserContainer,
  CardTitle,
  UserImgWrapper,
} from "./UsersPage.styles";

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
        throw(error);
      });
  }, []);

  return (
    <UserWrapper>
      {users.map((user) => (
        <Link to={`/users/${user.username}`} key={user.username}>
          <UserContainer key={user.username} className="container">
            <UserImgWrapper>
              <img src={user.avatar_url} alt={`${user.username} avatar`}/>
            </UserImgWrapper>
            <CardTitle>
              <h2>{user.username}</h2>
            </CardTitle>
          </UserContainer>
        </Link>
      ))}

      {loading && <Spinner />}
    </UserWrapper>
  );
};

export default UsersPage;
