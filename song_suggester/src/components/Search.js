import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { register, handleSubmit, errors} = useForm();

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const onSubmit = data => {
    // replace w/ axios call
    console.log("passed validation");
  };

  const handleInput = e => {
    setSearchTerm({ ...searchTerm, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="search">
        Search:
        <input
          id="search"
          name="search"
          type="text"
          onChange={e => handleInput(e)}
          ref={register({
            minlength: 1,
            pattern: {
              value: /^[A-Za-z0-9]+$/i,
              message: "Please only enter alphanumeric characters"
            }
          })}
        />
      </label>
        {errors.search && <p>{errors.search.message}</p>}
    </form>
  );
};
