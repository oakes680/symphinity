import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormDiv,
  FormLabel,
  FormInput,
  FormButton,
  LinkButton,
  FormContainer,
  FormCenter,
  FormValidationWarning
} from "../stylesheets/Form";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const LoginForm = props => {
  const [formData, setFormData] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const handleInput = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = data => {
    axiosWithAuth()
      .post(
        "https://cors-anywhere.herokuapp.com/https://spotify-song-suggester-be.herokuapp.com/api/auth/login",
        {
          username: data.login,
          password: data.password
        }
      )
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("");
      })
      .catch(err => console.log(err));

    console.log(data);
  };

  return (
    <FormContainer>
      <FormDiv>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Welcome to Symphinity</h2>
          <p>Please Login</p>
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
          {errors.login && (
            <FormValidationWarning>
              {errors.login.message}
            </FormValidationWarning>
          )}
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
          {errors.password && (
            <FormValidationWarning>
              {errors.password.message}
            </FormValidationWarning>
          )}
          <FormButton>Login</FormButton>
          <FormCenter>- OR -</FormCenter>
          <LinkButton href="/register">Sign Up</LinkButton>
        </Form>
      </FormDiv>
    </FormContainer>
  );
};

export default LoginForm;
