import styled from "styled-components";
import NesControl from "../../images/NES-Controller_SearchBar.png";
import { useState } from "react";
import { getVideogameById } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SearchContainer = styled.div`
  /* client\src\components\SearchBar\SearchBar.jsx */
  /* client\src\images\NES-Controller_SearchBar.png */
  display: inline-block;
  width: 400px;
  height: 200px;
  background-image: url(${NesControl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
const ElementsBox = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  top: 30px;
`;

const LabelContainer = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-around;
  color: black;
  font-weight: bold;
  text-shadow: #00545f 0px 0px 4px;
`;

const SearchInput = styled.input`
  position: relative;
  width: 212px;
  height: 27px;
  margin-top: 13px;
  left: 42px;
  border-radius: 4px;
`;

export default function SearchBar() {
  const [input, setInput] = useState({
    search: "",
  });
  const dispatch = useDispatch();

  function handleChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  async function handleKeyPress(event) {
    if (event.key === "Enter") {
      dispatch(getVideogameById(input.search));
    }
  }

  return (
    <SearchContainer>
      <ElementsBox>
        <LabelContainer>
          <label htmlFor="search">B u s c a r</label>
          <label htmlFor="search">j u e g o s:</label>
        </LabelContainer>
        <SearchInput
          type="text"
          name="search"
          id="search"
          value={input.search}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </ElementsBox>
    </SearchContainer>
  );
}
