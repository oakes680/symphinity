import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import axios from "axios";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({});

  const handleInput = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form>
      <label HtmlFor="username">
        Username<span className="mandatory">*</span>:
        <input
          type="text"
          id="username"
          name="username"
          onChange={e => handleInput(e)}
        />
      </label>
      <label HtmlFor="email">
        Email<span className="mandatory">*</span>:
        <input
          type="email"
          id="email"
          name="email"
          onChange={e => handleInput(e)}
        />
      </label>
      <label HtmlFor="password">
        Password<span className="mandatory">*</span>:
        <input
          type="password"
          id="password"
          name="password"
          onChange={e => handleInput(e)}
        />
      </label>
      <label HtmlFor="repeatpassword">
        Password Confirm<span className="mandatory">*</span>:
        <input
          type="password"
          id="repeatpassword"
          name="repeatpassword"
          onChange={e => handleInput(e)}
        />
      </label>
      <button>Sign Up</button>
    </form>
  );
};
