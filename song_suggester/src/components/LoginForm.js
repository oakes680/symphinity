import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Login, FormLabel, FormInput, LoginButton, LinkButton} from '../stylesheets/Login';

const LoginForm = () => {
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
    <Login onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="login">
        Email/Username:
        <FormInput
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
      </FormLabel>
      {errors.login && <p>{errors.login.message}</p>}
      <FormLabel htmlFor="password">
        Password:
        <FormInput
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
      </FormLabel>
      {errors.password && <p>{errors.password.message}</p>}
      <LoginButton>Login</LoginButton>
      <LinkButton href="/register">Sign Up</LinkButton>
    </Login>
  );
};


export default LoginForm;