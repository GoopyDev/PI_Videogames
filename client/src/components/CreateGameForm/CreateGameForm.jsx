import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  width: 35%;
  max-width: 600px;
  min-width: 350px;
`;

export default function CreateGameForm() {
  const gameData = useState({
    nombre: "",
    descripcion: "",
    plataformas: "",
    imagen: "",
    fechaLanzamiento: "",
    rating: 10,
    genre: [],
  });

  function addGenre(genre) {}
  return (
    <Container>
      <Form action="Submit">
        {/* id, nombre, descripcion, plataformas, imagen, fecha_lanzamiento, rating, genre */}
        <h1>Añadir nuevo juego</h1>
        <hr />
        <label htmlFor="nombreJuego">Nombre del juego:</label>
        <input
          type="text"
          name="nombreJuego"
          id="nombreJuego"
          placeholder="Escribe el nombre de tu nuevo juego"
        />

        <label htmlFor="descripcion:">Descripción:</label>
        <textarea
          name="descripcion"
          id="descripcion"
          cols="30"
          rows="10"
          placeholder="Describe el juego y sus mecánicas"
        ></textarea>

        <label htmlFor="plataformas">Plataformas:</label>
        <input
          type="text"
          name="plataformas"
          id="plataformas"
          placeholder="Plataformas"
        />

        <label htmlFor="imagen">URL de imagen del juego:</label>
        <input
          type="url"
          name="imagen"
          id="imagen"
          placeholder="Dirección URL de una imagen de portada del juego"
        />

        <label htmlFor="fechaLanzamiento">Fecha de lanzamiento:</label>
        <input type="date" name="fechaLanzamiento" id="fechaLanzamiento" />

        <label htmlFor="rating">Rating:</label>
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          name="rating"
          id="rating"
        />

        <label htmlFor="genre">Categorías:</label>
        <select name="genre" id="genre"></select>
        <button onClick={addGenre}>Añadir categoría</button>
      </Form>
    </Container>
  );
}
