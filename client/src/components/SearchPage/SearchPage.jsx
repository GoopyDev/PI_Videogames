import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getVideogameById, getVideogameByName } from "../../redux/actions";
import DetailGameParser from "../DetailGameParser/DetailGameParser";

const SearchPage = () => {
  const [state, setState] = useState({
    busqueda: "",
  });
  const dispatch = useDispatch();
  const location = useLocation();
  const details = useSelector((state) => state.details);

  useEffect(() => {
    // Parsear los parámetros de la URL
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const id = params.get("id");

    if (id) {
      // Realizar la petición de un videojuego por ID
      dispatch(getVideogameById(id));
      setState({ busqueda: id });
    } else if (name) {
      // Realizar la petición de videojuegos por nombre
      dispatch(getVideogameByName(name));
      setState({ busqueda: id });
    }
  }, [dispatch, location.search]);

  return (
    <div>
      <h1>Mostrando resultados para: "{state.busqueda}"</h1>
      {details &&
        details[0] &&
        details[0].apiGames.results.map((game, index) => (
          <DetailGameParser key={index} game={game} />
        ))}
    </div>
    // <div>
    //   {/* Renderizar la información obtenida */}
    //   {details.map((game, index) => (
    //     <DetailGameParser key={index} game={game} />
    //   ))}
    // </div>
  );
};

export default SearchPage;

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { getVideogameById, getVideogameByName } from "../../redux/actions";
// import DetailGameParser from "../DetailGameParser/DetailGameParser";
// // import GameCard from "../GameCard/GameCard";

// export default function SearchPage() {
//   const [state, setState] = useState({
//     actualSearch: "",
//     searchResults: [],
//   });

//   const detail = useSelector((state) => state.detail);
//   const dispatch = useDispatch();
//   const location = useLocation();

//   let source = new URLSearchParams(location.search).get("source");
//   let buscarID = true;
//   let game = new URLSearchParams(location.search).get("id");
//   if (!game) {
//     game = new URLSearchParams(location.search).get("name");
//     buscarID = false;
//   }
//   if (state.actualSearch !== game) setState({ ...state, actualSearch: game });

//   // Para saber si se busca por ID o por Nombre
//   const getVideogame = async () => {
//     if (game) {
//       if (buscarID) {
//         await dispatch(getVideogameById(game, source));
//       } else {
//         await dispatch(getVideogameByName(game, source));
//       }
//     }
//   };

//   // useEffect al montar
//   // useEffect(() => {
//   //   cleanDetail();
//   //   getVideogame();
//   // });

//   // useEffect cuando el componente se actualice (cuando actualSearch cambie)
//   useEffect(() => {
//     getVideogame().then(setState({ searchResults: detail }));
//   });

//   return (
//     <div>
//       <h1>Mostrando resultados para: "{game}"</h1>
//       {state.searchResults[0]?.apiGames.results.length > 0 ? (
//         state.searchResults[0].apiGames.results.map((game, index) => (
//           <DetailGameParser key={index} game={game} />
//         ))
//       ) : (
//         <div>No se encontraron coincidencias</div>
//       )}
//     </div>
//   );
// }
