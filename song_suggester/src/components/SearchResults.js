import React from "react";

import {
  SearchResultsContainer,
  SearchResult
} from "../stylesheets/SearchResults";

export const SearchResults = ({ songs }) => {
  return (
    <SearchResultsContainer>
      {songs.map(song => (
        <SearchResult key={song.id}>{song.name}</SearchResult>
      ))}
    </SearchResultsContainer>
  );
};
