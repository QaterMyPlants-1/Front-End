import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #757C57;
  padding: 3%;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-family: "Playfair Display", "Open Sans Condensed";
  }
  a:hover {
    color: #fff9ef;
    transition: all 250ms ease-in-out;
  }
`;
