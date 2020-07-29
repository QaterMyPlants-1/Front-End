import styled from "styled-components";

export const FormContainer = styled.div`
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;

  input {
    margin-top: 9px;
    min-width: 20em;
    height: 40px;
    padding: 0px 10px;
    font-size: 1rem;
    font-family: "Playfair Display", "Open Sans Consensed", sans-serif;
    background-color: #f3f3f3;
    border: 0;
    border-radius: 4px;
    margin-bottom: 2px;
    transition: all 250ms ease-in-out;
  }
  input:hover {
    background-color: #ffffff;
    box-shadow: 0px 0px 14px 0.3px #0e81ce96;
  }

  input:focus {
    outline: none;
    box-shadow: 0px 0px 12px 0.8px #3474dbb2;
  }
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .btn {
    font-family: "Playfair Display";
    width: 200px;
    font-size: 20px;
    padding: 6px 30px;
    border: 0;
    background-color: #3498db;
    color: #fff;
    border-radius: 3px;
    transition: all 250ms ease-in-out;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #2386c8;
  }
  .btn:focus {
    outline: not-allowed;
  }
  .btnDisable,
  .btnDisable:hover {
    cursor: not-allowed;
    background-color: grey;
  }
  p {
    font-family: "Playfair Display", "Open Sans Condensed", sans-serif;
  }
`;
