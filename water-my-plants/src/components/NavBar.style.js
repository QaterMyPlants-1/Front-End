import styled from "styled-components";

/* #B2AD74 

color schemes: #757C57,
#FFF9EF, and black

#FFF9EF

font-family: 'Playfair Display' 
and 'Open Sans Condensed' 
(all taken from font.google*/

export const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderTitleTop = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  letter-spacing: .85rem;
  line-height: 1rem;
  font-size: .75rem;
  color: #fff9ef;
`;

export const HeaderTitleBottom = styled.div`
  font-family: 'Playfair Display', serif;
  color: #fff9ef;
  letter-spacing: .75rem;
  font-size: 1.75rem;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #757C57;
  padding: 3%;
  a {
    padding: .5rem;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-family: "Open Sans Condensed", sans-serif;
  }
  a:hover {
    color: #757C57;
    background-color: #fff9ef;

    border-radius: 2px;

    transition: all 250ms ease-in-out;
  }
`;
