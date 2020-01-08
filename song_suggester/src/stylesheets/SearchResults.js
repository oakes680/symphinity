import styled from "styled-components";

export const SearchResultsContainer = styled.div`
  background-color: lightgrey;
`;

export const SearchResult = styled.p`
  font-size: 14px;
  padding: 1rem;
  margin: 0;

  :nth-of-type(even) {
    background-color: #606b6e;
  }

  :hover {
    background-color: #191414;
    color: #1db954;
  }
`;
