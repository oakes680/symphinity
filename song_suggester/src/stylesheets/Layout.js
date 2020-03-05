import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 64px);
    display: relative;
    @media (max-width: 768px){
        display: flex;
        flex-direction:column;
    }
`

export const Aside = styled.aside`
    width: 240px;
    height: 100vh;
    top: 64px;
    background-color: #121212;
    position: fixed;
  
    @media (max-width: 768px){
        position: static;
        display:flex;
        width: 100%;
        height: auto;
        top: 0;
        margin: 70px auto 0px;
          
    }
`
export const Nav = styled.nav`
    margin: 40px 0 0 40px;
 
    @media (max-width: 768px){
            display:flex;
            margin: 0 auto;
            width: 90%;
            justify-content: space-evenly;   
    }

    a {
        display: block;
        color: #FFF;
        text-decoration: none;
        margin: 15px 0;
        font-size: 1.2rem; 
        @media (max-width: 768px){
            display: inline;
            font-size: 1rem;
                     
    }
    }
    a:hover {
        color: #999;
    }
`

export const Main = styled.main`
    position: absolute;
    width: calc(100vw - 260px);
    top: 64px;
    left: 240px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    @media (max-width: 768px){
        position: static;
        width: 95%;
        margin: 0 auto;
        left:0px;
        top: 0px;
    }
   

    h2,p {
        text-align:left;
    }
`