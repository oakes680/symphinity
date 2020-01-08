import styled from "styled-components";
import colors from "../stylesheets/Colors";

export const Form = styled.form`
  background-color: ${colors.blue};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

export const FormLabel = styled.label`
  color: ${colors.mediumBlack};
`;

export const FormInput = styled.input`
  border: none;
  margin-bottom: 1rem;
`;

export const FormButton = styled.button`
  margin: 0 auto;
  border: none;
  border-radius: 3px;
  background-color: ${colors.lightBlack};
  color: #fff;
  width: 50%;
`;

export const FormError = styled.div``;
