import styled from "styled-components";
import bg from "../assets/symphonity-bg.jpg";
import colors from "./Colors";

export const Form = styled.form`
  width: 480px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 30px 80px;
  background-color: #121212;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1em;
  margin: 20px 0;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border: 1px solid #121212;
  background-color: #282828;
  margin: 5px 0 0;
`;

export const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #121212;
  border-radius: 25px;
  font-size: 1.2em;
  margin: 30px 0;
  color: #121212;
  transition: 0.15s ease-out background-color;

  :hover {
    cursor: pointer;
    background-color: ${colors.altGreen};
  }
`;

export const LinkButton = styled.a`
  display: block;
  width: 100%;
  height: 45px;
  background-color: #1db954;
  border: 1px solid #121212;
  font-size: 1.2rem;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  color: #121212;
  line-height: 45px;
  transition: 0.15s ease-out background-color;

  :hover {
    background-color: ${colors.altGreen};
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(${bg});
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormCenter = styled.p`
  text-align: center;
`;

export const Ast = styled.span`
  color: #e63209;
  margin: 0 3px;
`;
