// import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  border-radius: 10px;
  background-image: repeating-linear-gradient(
    60deg,
    #2229,
    #2229 30px,
    #3339 30px,
    #3339 60px
  );
`;

const LinksDiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;

  & a {
    text-decoration: none;
    display: block;
    margin: 0 20px;
  }
`;

export default function NavBar() {
  const history = useNavigate();
  const handleSearch = (event, input) => {
    event.preventDefault();
    // const input = event.target.elements.searchInput.value;
    history.push(`/search?query=${input}`);
  };

  return (
    <Nav>
      <LinksDiv>
        <Link to="/Home">Home</Link>
        <Link to="/NewGame">Crear nuevo juego</Link>
        <Link to="/About">About</Link>
      </LinksDiv>
      <SearchBar handleSearch={handleSearch}></SearchBar>
      {/* <form >
            <input type="text" name="searchInput" placeholder="Search..." />
            <button type="submit">Search</button>
          </form> */}
    </Nav>
  );
}
