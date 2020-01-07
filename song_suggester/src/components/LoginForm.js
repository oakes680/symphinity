import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const [formData, setFormData] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const handleInput = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = data => {
    // replace w/ axios call
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="login">
        Email/Username:
        <input
          type="text"
          id="login"
          name="login"
          onChange={e => handleInput(e)}
          ref={register({
            required: true,
            pattern: {
              value: /^(?:[A-Z\d][A-Z\d_-]{7,}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i,
              message: "Please enter a valid email address or username."
            }
          })}
        />
      </label>
      {errors.login && <p>{errors.login.message}</p>}
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          name="password"
          onChange={e => handleInput(e)}
          ref={register({
            required: true,
            pattern: {
              value: /^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/,
              message: "Invalid password."
            }
          })}
        />
      </label>
      {errors.password && <p>{errors.password.message}</p>}
      <button>Login</button>
    </form>
  );
};
