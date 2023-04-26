import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getVideogames } from "../../redux/actions";
import GameCard from "../GameCard/GameCard";
import styled from "styled-components";

const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function CardsContainer() {
  const gamesData = useSelector((state) => state.apiGames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div>
      <h2>Juegos de la biblioteca</h2>
      <CardsDiv>
        {gamesData.map((game, index) => {
          return <GameCard key={index} class="card" gameData={game} />;
        })}
      </CardsDiv>
    </div>
  );
}
