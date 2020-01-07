import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({});
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = data => {
    // replace w/ axios call
    console.log(data);
  };

  const handleInput = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">
        Username<span className="mandatory">*</span>:
        <input
          type="text"
          id="username"
          name="username"
          onChange={e => handleInput(e)}
          ref={register({
            required: true,
            minlength: 8,
            pattern: {
              value: /^(?:[A-Z\d][A-Z\d_-]{7,})$/i,
              message:
                "Please enter a username with at least 8 alphanumeric characters."
            }
          })}
        />
      </label>
      {errors.username && <p>{errors.username.message}</p>}
      <label htmlFor="email">
        Email<span className="mandatory">*</span>:
        <input
          type="email"
          id="email"
          name="email"
          onChange={e => handleInput(e)}
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Please enter a valid email address."
            }
          })}
        />
      </label>
      {errors.email && <p>{errors.email.message}</p>}
      <label htmlFor="password">
        Password<span className="mandatory">*</span>:
        <input
          type="password"
          id="password"
          name="password"
          onChange={e => handleInput(e)}
          ref={register({
            required: true,
            minlength: 8,
            pattern: {
              value: /^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/,
              message: "Please enter a password of at least 8 characters."
            }
          })}
        />
      </label>
      {errors.password && <p>{errors.password.message}</p>}
      <label htmlFor="repeatpassword">
        Password Confirm<span className="mandatory">*</span>:
        <input
          type="password"
          id="repeatpassword"
          name="repeatpassword"
          onChange={e => handleInput(e)}
          ref={register({
            required: true,
            minlength: 8,
            validate: value =>
              value === password.current || "The passwords do not match!"
          })}
        />
      </label>
      {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}
      <button>Sign Up</button>
    </form>
  );
};
