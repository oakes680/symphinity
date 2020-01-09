import styled from 'styled-components';
import bg from '../assets/symphonity-bg.jpg';

export const Form = styled.form`
    width: 480px;
    margin: 0 auto;
    border-radius: 5px;
    padding: 30px 80px;
    background-color: #121212;
`

export const FormLabel = styled.label`
    display:block;
    font-size: 1em;
    margin: 15px 0;
`

export const FormInput = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    border: 1px solid #121212;
    background-color: #282828;
    margin: 5px 0 0;
`

export const LoginButton = styled.button`
    display: block;
    width: 100%
    padding: 10px;
    background-color: #fff;
    border: 1px solid #121212;
    border-radius: 25px;
    font-size: 1.2em;
    margin: 20px 0;
    color: #121212;
`

export const LinkButton = styled.a`
    display: block;
    text-align:center;
    height: 40px;
    background-color: #1DB954;
    border: 1px solid #121212;
    border-radius: 25px;
    font-size: 1.2em;
    font-weight: bold;
`

export const FormContainer = styled.div`
    position: relative;
    width: 100%;
    top: 64px;
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${bg});
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`