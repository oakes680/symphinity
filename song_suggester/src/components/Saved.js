import React from 'react';
import { Wrapper, Aside, Nav, Main } from "../stylesheets/Layout";
import { FavCard, Fav } from "../stylesheets/Favorites";
import { Artist, Thumb, SongName, ArtistName } from '../stylesheets/SearchResults';
const Saved = () => {


    return(
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
            <i class="fas fa-sign-out-alt"></i>Logout
          </a>
        </Nav>
      </Aside>
      <Main>
        <FavCard>
            <div>
            <Thumb></Thumb>
            <Artist>
                <ArtistName>Artist Name</ArtistName>
                <SongName>Song Name</SongName>
            </Artist>
            </div>
            <Fav><i class="fas fa-heart"></i></Fav>
        </FavCard>
        <FavCard>
            <div>
            <Thumb></Thumb>
            <Artist>
            <ArtistName>Artist Name</ArtistName>
                <SongName>Song Name</SongName>
            </Artist>
            </div>
            <Fav><i class="fas fa-heart"></i></Fav>
        </FavCard>
      </Main>
    </Wrapper>
    );
}

export default Saved;