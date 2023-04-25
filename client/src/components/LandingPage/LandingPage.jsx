import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 75%;
  border: 3px solid white;
  border-radius: 7px;
`;

export default function LandingPage() {
  return (
    <Container>
      <h1>Videogames Blackhole</h1>
      <p>
        Un sitio en donde encontrarás miles de videojuegos y sus reseñas,
        ratings, detalles de tus juegos favoritos y más, para que puedas
        explorar los juegos más exóticos y divertidos. Ideal para jugadores
        hábiles como tú que buscan nuevas aventuras y emociones en el mundo de
        los videojuegos."
      </p>
      <Link to={"/home"}>
        <button>Acceder</button>
      </Link>
    </Container>
  );
}
