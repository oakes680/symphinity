import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 64px);
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Aside = styled.aside`
    width: 240px;
    height: 100%;
    background-color: #121212;
    position: fixed;
`
export const Nav = styled.nav`
    margin: 40px 0 0 40px;

    a {
        display: block;
        color: #FFF;
        text-decoration: none;
        margin: 15px 0;
        font-size: 1.2rem;
    }
    a:hover {
        color: #999;
    }
`

export const Main = styled.main`
    width: 100vw;
    height: 100%;
`