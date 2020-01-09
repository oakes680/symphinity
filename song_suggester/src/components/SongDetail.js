import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

import {
  LargeCard,
  Frame,
  AddToFav,
  Similar
} from "../stylesheets/SongDetails";

import {
  Thumb,
  Artist,
  ArtistName,
  SongName
} from "../stylesheets/SearchResults";
import { Fav, Radar } from "../stylesheets/Favorites";

export const SongDetail = ({
  song,
  songData,
  setSelectedSong,
  setSongData,
  setSearchResults,
  setSearchTerm
}) => {
  const [recommendedSongIDs, setRecommendedSongIDs] = useState([]);
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  console.log(recommendedSongs);

  useEffect(() => {
    // prevent sending empty requests to DS API
    if (Object.keys(songData).length) {
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://spotify-flow-ds.herokuapp.com/input",
          songData,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => setRecommendedSongIDs(res.data.recommended_song_ids))
        .catch(err => console.error(err));
    }
  }, [songData]);

  const token = useRef("");
  useEffect(() => {
    const url = window.location.href;
    // extract token from url
    token.current = url.substring(url.indexOf("=") + 1, url.indexOf("&"));
  }, []);

  useEffect(() => {
    let listOfIDs = "";
    recommendedSongIDs.map(id => (listOfIDs += `${id},`));
    listOfIDs = listOfIDs.substring(0, listOfIDs.length - 1);

    // prevent sending empty requests to spotify API
    if (listOfIDs.length) {
      axios
        .get(`https://api.spotify.com/v1/tracks/?ids=${listOfIDs}`, {
          headers: {
            Authorization: `Bearer ${token.current}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(res => setRecommendedSongs(res.data.tracks))
        .catch(err => console.error(err));
    }
  }, [recommendedSongIDs]);

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
          track_id: song.id,
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

  return (
    <LargeCard>
      <Frame>
        <iframe
          src={`https://open.spotify.com/embed/track/${song.id}`}
          width="90%"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="spotifyPlayer"
        ></iframe>
        <AddToFav>
          <i className="far fa-heart"></i>
          <i className="fas fa-heart"></i>
          <h3>Add to Favorites</h3>
        </AddToFav>
        {/* <FollowBackground>
            <iframe
              src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${song.artists[0].id}&size=detail`}
              width="auto"
              height="56"
              scrolling="no"
              frameBorder="0"
              style={{ border: "none", overflow: "hidden" }}
              allowtransparency="true"
            ></iframe>
          </FollowBackground> */}
        <Radar>
          <h2>Feel the Beat!</h2>
          Radar Chart Will Live Here!
        </Radar>
      </Frame>
      <Frame>
        <h2>You might like</h2>

        {recommendedSongs.map(song => (
          <Similar onClick={() => updateSong(song)}>
            <div>
              <Thumb src={song.album.images[2].url} />
              <Artist>
                <ArtistName>{song.artists[0].name}</ArtistName>
                <SongName>{song.name}</SongName>
              </Artist>
            </div>
            <Fav>
              <i className="far fa-heart"></i>
              <i className="fas fa-heart"></i>
            </Fav>
          </Similar>
        ))}
      </Frame>
    </LargeCard>
  );
};
