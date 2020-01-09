import React from "react";
import { Wrapper, Aside, Nav, Main } from "../stylesheets/Layout";
import { Search } from "./Search";
import { SongDetail } from "./SongDetail";

const TempDash = ({
  selectedSong,
  setSelectedSong,
  searchResults,
  setSearchResults,
  songData,
  setSongData,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <Wrapper>
      <Aside>
        <Nav>
          <a href="/dashboard">
            <i className="fas fa-columns"></i>Dashboard
          </a>
          <a href="/favorites">
            <i className="far fa-heart"></i>Favorites
          </a>
          <a href="logout">
            <i className="fas fa-sign-out-alt"></i>Logout
          </a>
        </Nav>
      </Aside>
      <Main>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          selectedSong={selectedSong}
          setSelectedSong={setSelectedSong}
          songData={songData}
          setSongData={setSongData}
        ></Search>
        {selectedSong.id && !searchTerm.search && (
          <SongDetail song={selectedSong} songData={songData}></SongDetail>
        )}
      </Main>
    </Wrapper>
  );
};

export default TempDash;
