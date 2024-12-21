import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Dashboard = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <h3>Your Token: {token}</h3>
      <button onClick={logout}>
        LOGOUT
      </button>
    </div>
  );
};
