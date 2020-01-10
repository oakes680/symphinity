import React, { useEffect } from "react";
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
  setSongData,
  spotifyToken
}) => {
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (searchTerm.search !== "") {
      const baseUrl = "https://api.spotify.com/v1/search";
      axios
        .get(`${baseUrl}?q=${encodeURI(searchTerm.search)}&type=track`, {
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(res => setSearchResults(res.data.tracks.items))
        .catch(err => console.error(err));
    }
  }, [searchTerm, setSearchResults, spotifyToken]);

  const onSubmit = data => {
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
            value: /^[a-zA-Z0-9 ]*$/g, // /^[a-z\d\-_\s]+$/i
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
        spotifyToken={spotifyToken}
      ></SearchResults>
    </Form>
  );
};
export default Search;
