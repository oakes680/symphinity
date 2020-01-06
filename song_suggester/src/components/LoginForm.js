import React, { useState, useEffect } from "react";

export const LoginForm = () => {
  const [formData, setFormData] = useState({});

  const handleInput = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form>
      <label HtmlFor="login">
        Email/Username:
        <input
          type="text"
          id="login"
          name="login"
          onChange={e => handleInput(e)}
        />
      </label>
      <label HtmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          name="password"
          onChange={e => handleInput(e)}
        />
      </label>
      <button>Login</button>
    </form>
  );
};
