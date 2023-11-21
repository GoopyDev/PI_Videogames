// import { useSelector, useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import { getVideogames } from "../../redux/actions";
import GameCard from "../GameCard/GameCard";
import styled from "styled-components";

const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function CardsContainer(props) {
  const { gamesToShow } = props;
  console.log(gamesToShow);
  // const dispatch = useDispatch();
  // const [state, setState] = useState({
  // });

  // useEffect(() => {
  //   dispatch(getVideogames());
  // }, [dispatch]);

  // function obtenerDeApi() {
  //   const gamesData = useSelector((state) => state.apiGames);
  // }

  // function obtenerDeDB() {
  //   const gamesData = useSelector((state) => state.dbGames);
  // }

  return (
    <div>
      <h2>Juegos de la biblioteca</h2>
      <CardsDiv>
        {gamesToShow.api.length ? (
          gamesToShow.api.map((game, index) => (
            <GameCard key={index} class="card" gameData={game} />
          ))
        ) : (
          <div>No hay juegos guardados</div>
        )}
        {/* {gamesToShow.api.map((game, index) => {
          return <GameCard key={index} class="card" gameData={game} />;
        })} */}
      </CardsDiv>
      <h2>Juegos de tu base de datos</h2>
      <CardsDiv>
        {gamesToShow.db.length ? (
          gamesToShow.db.map((game, index) => (
            <GameCard key={index} class="card" gameData={game} />
          ))
        ) : (
          <div>No hay juegos guardados</div>
        )}
        {/* {gamesToShow.db.map((game, index) => {
          return <GameCard key={index} class="card" gameData={game} />;
        })} */}
      </CardsDiv>
    </div>
  );
}
