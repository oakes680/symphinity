import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { SearchResults } from "./SearchResults";
import {
  Form,
  FormInput,
  FormLabel,
  LinkButton,
  FormValidationWarning
} from "../stylesheets/Form";

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="search" style={{ margin: ".5rem 0" }}>
        Search:
      </FormLabel>
      <FormInput
        style={{ marginBottom: "1rem" }}
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
      {errors.search && (
        <FormValidationWarning>{errors.search.message}</FormValidationWarning>
      )}
      <LinkButton href={url}>get auth</LinkButton>
      <SearchResults songs={searchResults}></SearchResults>
    </Form>
  );
};
