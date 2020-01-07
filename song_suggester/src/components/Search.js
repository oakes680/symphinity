import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { SearchResults } from "./SearchResults";
import { SearchBar, SearchContainer } from "../stylesheets/Search";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState({ search: "" });
  const [searchResults, setSearchResults] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  const token = useRef("");
  const baseUrl = "https://accounts.spotify.com/authorize";
  const clientID = "46e78711e2c14c21a689149e27b79266";
  const redirect = "http://localhost:3000/search";
  const scope = "user-read-private";
  const url = `${baseUrl}?client_id=${clientID}&redirect_uri=${redirect}&scope=${scope}&response_type=token`;

  useEffect(() => {
    const url = window.location.href;
    // extract token from url
    token.current = url.substring(url.indexOf("=") + 1, url.indexOf("&"));
  }, []);

  useEffect(() => {
    const baseUrl = "https://api.spotify.com/v1/search";
    axios
      .get(`${baseUrl}?q=${encodeURI(searchTerm.search)}&type=track`, {
        headers: {
          Authorization: `Bearer ${token.current}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(res => setSearchResults(res.data.tracks.items))
      .catch(err => console.error(err));
  }, [searchTerm]);

  const onSubmit = data => {
    // replace w/ axios call
    console.log("passed validation");
  };

  const handleInput = e => {
    setSearchTerm({ ...searchTerm, [e.target.id]: e.target.value });
  };

  return (
    <SearchContainer onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="search">Search:</label>
      <SearchBar
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
      {errors.search && <p>{errors.search.message}</p>}
      <a href={url}>get auth</a>
      <SearchResults songs={searchResults}></SearchResults>
    </SearchContainer>
  );
};
