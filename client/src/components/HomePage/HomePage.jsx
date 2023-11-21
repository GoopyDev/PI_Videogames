// import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogames } from "../../redux/actions";
import CardsContainer from "../CardsContainer/CardsContainter";

export default function HomePage() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    // prettier-ignore
    gamesToShow: {
      api   : [],
      db    : [],
      // search: [],
    },
  });

  const { apiGames, dbGames } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  useEffect(() => {
    // prettier-ignore
    setState({ gamesToShow: {
      api   : apiGames || [],
      db    : dbGames  || [],
      // search: detail   || []
    } });
  }, [apiGames, dbGames]);

  return (
    <div style={{ width: "95%" }}>
      <hr />
      <CardsContainer gamesToShow={state.gamesToShow} />
      <hr />
    </div>
  );
}
