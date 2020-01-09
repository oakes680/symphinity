import React from "react";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";

const Login = ({ user, history }) => {
  return (
    <div className="login-page">
      {localStorage.getItem("token") ? (
        <Redirect to="/dashboard" />
      ) : (
        <LoginForm history={history} />
      )}
    </div>
  );
};

export default Login;
