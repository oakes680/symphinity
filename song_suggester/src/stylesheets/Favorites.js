import styled from "styled-components";

export const FavCard = styled.div`
    width: 30%;
    height: 80px;
    margin: 10px;
    background-color: #282828;
    border:1px solid #121212;
    padding: 12px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Fav = styled.div`
    position: relative

    i {
        position:absolute;
        font-size: 2rem;
        color: #1DB954;
        left: -30px;
    }

    .fas {
        opacity: 0;
    }

    .fas:hover {
        opacity: 1;
    }

    .far {
        opacity: 1;
    }
    .far:hover {
        opacity: 0;
    }
`

export const Radar = styled.div`
    margin-top: 40px;
    background-color: #181818;
    width: 90%;
    height: auto;
    padding: 40px;
    color: white;
`