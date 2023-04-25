import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import CardsContainer from "../CardsContainer/CardsContainter";

export default function HomePage() {
  return (
    <div style={{ width: "95%" }}>
      <SearchBar></SearchBar>
      <hr />
      <CardsContainer></CardsContainer>
    </div>
  );
}
