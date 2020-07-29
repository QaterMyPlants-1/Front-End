import styled from "styled-components";

export const LoginContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 250px;
    margin: 5%;
  }
`;

export const NavBar= styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: black;
  padding: 20px;
  a{
    color:#757C57;
    text-decoration: none;
    font-size: 1.8rem;
    font-family: 'Playfair Display', 'Open Sans Condensed'
  }
  a:hover{
    color: white;
    transition: all 280ms ease-in-out
  }

`;
