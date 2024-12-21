import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataObj =
     {
       email,
       password 
     };

    axios
      .post("https://reqres.in/api/login", dataObj)
      .then((response) => {
        login(response.data.token);

        navigate("/dashboard");
      })
      .catch((err) => {
        setError(
          err.response?.data?.error ||
            "Login failed"
        );
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="LOGIN" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
