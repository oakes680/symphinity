import styled from "styled-components";
import colors from "../stylesheets/Colors";

export const SearchResultsContainer = styled.div`
  background-color: lightgrey;
`;

export const SearchResult = styled.p`
  font-size: 14px;
  padding: .75rem;
  margin: 0;
  color: ${colors.mediumBlack};

  :nth-of-type(even) {
    background-color: #606b6e;
  }

  :hover {
    background-color: #191414;
    color: #1db954;
    cursor: pointer;
  }
`;
