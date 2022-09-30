import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import {
  RegWrapper,
  RegForm,
  RegContent,
  RegButtonWrap,
} from "./RegisterForm.styles";

// Data
import { postUser } from "../../utils/api";

// Components
import Spinner from "../Spinner";

const RegistrationFrom = () => {
  const [reg, setReg] = useState({ username: "", name: "", avatar_url: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    setLoading(true);
    setReg(reg);
    postUser(reg)
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        throw(error);
      });
  };

  const handleUsernameChange = (event) => {
    setReg({ ...reg, username: event.target.value });
  };

  const handleNameChange = (event) => {
    setReg({ ...reg, name: event.target.value });
  };

  const handleAvatarChange = (event) => {
    setReg({ ...reg, avatar_url: event.target.value });
  };

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <RegWrapper>
      <h1>Sign Up Below</h1>
      <RegForm onSubmit={handleSubmit}>
        <RegContent>
          <label>
            <input
              className="text"
              type="text"
              value={reg.username}
              onChange={handleUsernameChange}
              placeholder="Please Enter A Username"
            />
          </label>
          <label>
            <input
              className="text"
              type="text"
              value={reg.name}
              onChange={handleNameChange}
              placeholder="Please Enter Your Name"
            />
          </label>
          <label>
            <input
              className="text"
              type="text"
              value={reg.avatar_url}
              onChange={handleAvatarChange}
              placeholder="Upload Your Image Url"
            />
          </label>

          <label>
            <button onClick={handleClick}> Submit</button>
          </label>
        </RegContent>
        {loading && <Spinner />}
      </RegForm>
    </RegWrapper>
  );
};

export default RegistrationFrom;
