import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { SearchResults } from "./SearchResults";
import {
  Form,
  FormInput,
  FormLabel,
  FormValidationWarning
} from "../stylesheets/Form";

export const Search = ({
  searchTerm,
  setSearchTerm,
  searchResults,
  setSearchResults,
  setSelectedSong,
  setSongData
}) => {
  const { register, handleSubmit, errors } = useForm();
  const token = useRef("");

  useEffect(() => {
    const url = window.location.href;
    // extract token from url
    token.current = url.substring(url.indexOf("=") + 1, url.indexOf("&"));
  }, []);

  useEffect(() => {
    if (searchTerm.search !== "") {
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
    }
  }, [searchTerm, setSearchResults]);

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
        value={searchTerm.search}
        ref={register({
          minlength: 1,
          pattern: {
            value: /^[a-z\d\-_\s]+$/i,
            message: "Please only enter alphanumeric characters"
          }
        })}
      />
      {errors.search && (
        <FormValidationWarning>{errors.search.message}</FormValidationWarning>
      )}

      <SearchResults
        songs={searchResults}
        setSelectedSong={setSelectedSong}
        setSearchResults={setSearchResults}
        setSongData={setSongData}
        setSearchTerm={setSearchTerm}
      ></SearchResults>
    </Form>
  );
};
export default Search;
