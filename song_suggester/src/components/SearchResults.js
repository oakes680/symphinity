import React, { useEffect, useRef, useCallback } from "react";
import axios from "axios";

import {
  SearchResultsContainer,
  SongCard,
  Artist,
  Thumb,
  SongName,
  ArtistName
} from "../stylesheets/SearchResults";

export const SearchResults = ({
  songs,
  setSelectedSong,
  setSongData,
  setSearchResults,
  setSearchTerm
}) => {
  const token = useRef("");

  const updateSong = useCallback(
    async song => {
      setSelectedSong(song);
      setSearchResults([]);
      setSearchTerm({ search: "" });

      try {
        const baseUrl = "https://api.spotify.com/v1/audio-features";
        const res = await axios.get(`${baseUrl}/${song.id}`, {
          headers: {
            Authorization: `Bearer ${token.current}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        });

        const {
          danceability,
          energy,
          key,
          loudness,
          mode,
          speechiness,
          acousticness,
          instrumentalness,
          liveness,
          valence,
          tempo,
          duration_ms,
          time_signature
        } = res.data;

        setSongData({
          trackID: song.id,
          popularity: song.popularity,
          danceability,
          energy,
          key,
          loudness,
          mode,
          speechiness,
          acousticness,
          instrumentalness,
          liveness,
          valence,
          tempo,
          duration_ms,
          time_signature
        });
      } catch (err) {
        console.error(err);
      }
    },
    [setSelectedSong, setSearchResults, setSearchTerm, setSongData]
  );

  useEffect(() => {
    const url = window.location.href;
    // extract token from url
    token.current = url.substring(url.indexOf("=") + 1, url.indexOf("&"));
  }, []);

  return (
    <SearchResultsContainer>
      {songs.map(song => (
        <SongCard key={song.id} onClick={() => updateSong(song)}>
          <Thumb src={song.album.images[2].url}></Thumb>
          <Artist>
            <ArtistName>{song.artists[0].name}</ArtistName>
            <SongName>{song.name}</SongName>
          </Artist>
        </SongCard>
      ))}
    </SearchResultsContainer>
  );
};
