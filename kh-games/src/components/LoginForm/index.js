import React, { useState } from "react";

const LoginForm = ({ logIn, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(details, "deets form");
    logIn(details);
  };

  const handleUsernameChange = (event) => {
    setDetails({ ...details, username: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setDetails({ ...details, password: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Sign In Here!</h2>
        {error !== "" ? <div className="errormsg">{error} </div> : ""}
      </div>
      <main>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={handleUsernameChange}
          required
          value={details.username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          required
          value={details.password}
        />
        <input type="submit" value="login" />
      </main>
    </form>
  );
};

export default LoginForm;
