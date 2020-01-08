import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormInput,
  FormButton,
  FormLabel,
  FormContainer,
  Ast,
  LinkButton
} from "../stylesheets/Form";

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
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up For Symphinity</h2>
        <FormLabel htmlFor="username">
          Username<Ast>*</Ast>:
          <FormInput
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
        </FormLabel>
        
        {errors.username && <p>{errors.username.message}</p>}
        <FormLabel htmlFor="email">
          Email<Ast>*</Ast>:
          <FormInput
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
        </FormLabel>
        
        {errors.email && <p>{errors.email.message}</p>}
        <FormLabel htmlFor="password">
          Password<Ast>*</Ast>:
          <FormInput
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
        </FormLabel>
        
        {errors.password && <p>{errors.password.message}</p>}
        <FormLabel htmlFor="repeatpassword">
          Password Confirm<Ast>*</Ast>:
          <FormInput
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
        </FormLabel>
        
        {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}
        <FormButton>Sign Up</FormButton>
        <LinkButton href="/">Sign In</LinkButton>
      </Form>
    </FormContainer>
  );
};
