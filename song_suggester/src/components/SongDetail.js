import React from "react";
import { LargeCard, Frame, AddToFav, Similar } from "../stylesheets/SongDetails";
import { Thumb, Artist, ArtistName, SongName } from '../stylesheets/SearchResults'
import { Fav } from '../stylesheets/Favorites'

export const SongDetail = ({ song }) => {

    const favHover = (id) => {
        document.getElementById(id).classList.add('fas');
    }
    const favOut = (id) => {
        document.getElementById(id).classList.remove('fas');
    }
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
        <AddToFav onMouseOver={() => favHover('fav')} onMouseOut={() => favOut('fav')}>
            <i className="far fa-heart" id="fav"></i>
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
      </Frame>
      <Frame>
          <h2>You might like</h2>
          <Similar>
              <div>
                <Thumb />
                <Artist>
                    <ArtistName>Artist Name</ArtistName>
                    <SongName>Song Name</SongName>
                </Artist>
              </div>
              <Fav onMouseOver={() => favHover('sim')} onMouseOut={() => favOut('sim')}><i class="far fa-heart" id="sim"></i></Fav>
          </Similar>
      </Frame>
    </LargeCard>
  );
};
