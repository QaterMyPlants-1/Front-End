import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  button {
    font-family: "Playfair Display";
    font-size: 18px;
    margin: 10%;
    padding: 5px 30px;
    border: 0;
    background-color: #3498db;
    color: #FFF9EF;
    border-radius: 3px;
    transition: all 250ms ease-in-out;
  }
  .button:hover {
    background-color: #2386c8;
  }
`;

export const ProfileDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
