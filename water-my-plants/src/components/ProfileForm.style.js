import styled from 'styled-components';

export const ProfileFormWrapper = styled.form`
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