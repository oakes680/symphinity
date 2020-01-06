import React, { useState, useEffect } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const handleInput = e => {
    setSearchTerm({ ...searchTerm, [e.target.id]: e.target.value });
  };

  return (
    <form>
      <label htmlFor="search">Search:</label>
      <input id="search" name="search" type="text" onChange={e => handleInput(e)}></input>
    </form>
  );
};
