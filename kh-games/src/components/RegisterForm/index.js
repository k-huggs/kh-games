import React, { useEffect, useState } from "react";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setReg(reg);
    postUser(reg)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
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

  return (
    <RegWrapper>
      <RegForm onSubmit={handleSubmit}>
        <label for>
          Please Enter a username
          <input
            type="text"
            value={reg.username}
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          Please Enter Your Name
          <input type="text" value={reg.name} onChange={handleNameChange} />
        </label>
        <label>
          Upload Your Image Url
          <input
            type="text"
            value={reg.avatar_url}
            onChange={handleAvatarChange}
          />
        </label>

        <RegContent>
          <RegButtonWrap>
            <label>
              <input type="submit"></input>
            </label>
          </RegButtonWrap>
        </RegContent>
        {loading && <Spinner />}
      </RegForm>
    </RegWrapper>
  );
};

export default RegistrationFrom;
