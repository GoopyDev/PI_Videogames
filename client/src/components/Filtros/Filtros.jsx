import styled from "styled-components";
import { orderGames } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function Filtros() {
  const [selectedOption, setSelectedOption] = useState("");
  const orderBy = ["a-z", "z-a", "Rating asc", "Rating des"];
  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
    console.log("Selected: ", event.target.value);
    setSelectedOption(event.target.value);
    dispatch(orderGames(event.target.value));
  };

  return (
    <MainDiv>
      <Item>
        <label htmlFor="ordenar">Ordenar:</label>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Selecciona una opción</option>
          {orderBy.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Item>
      <Item>
        <label htmlFor="genero">Filtar por categoría:</label>
      </Item>
      <Item>
        <label htmlFor="origen">Origen:</label>
      </Item>
    </MainDiv>
  );
}
