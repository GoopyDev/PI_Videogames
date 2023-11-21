import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_BY_ID,
  GET_VIDEOGAME_BY_NAME,
  CLEAN_DETAIL,
  ADD_VIDEOGAME,
  ORDER_GAMES,
} from "./action-types";
import axios from "axios";

// defino mis funciones "action creators"

export const getVideogames = () => {
  return async function (dispatch) {
    console.log("Obteniendo juegos...");
    const data = await axios
      .get("http://localhost:3001/videogames")
      // .then((info) => info.json())
      .then((response) => {
        console.log("Busqueda (DETAILS):");
        console.log(response.data);
        console.log("Type of():", typeof response.data);
        console.log("IsArray():", Array.isArray(response.data));
        console.log("-------------------");
        return response.data;
      })
      .catch((error) => {
        throw Error({ message: error.message });
      });
    dispatch({ type: GET_VIDEOGAMES, payload: data });
  };
};

export const getVideogameById = (id, source = "api") => {
  return async function (dispatch) {
    console.log(`Obteniendo detalles del juego con ID ${id}...`);
    const data = await axios
      .get(`http://localhost:3001/videogames/${id}?source=${source}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
    dispatch({ type: GET_VIDEOGAME_BY_ID, payload: data });
  };
};

export const getVideogameByName = (game, source = "api") => {
  return async function (dispatch) {
    console.log(`Buscando juegos que coincidan con el nombre ${game}...`);
    const data = await axios
      .get(`http://localhost:3001/videogames?gameName=${game}&source=${source}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
    dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: data });
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};

export const addVideogame = (objGame) => {
  return {
    type: ADD_VIDEOGAME,
    payload: objGame,
  };
};

export const orderGames = (orderBy) => {
  return {
    type: ORDER_GAMES,
    payload: orderBy,
  };
};

// export const getUsers = () => {
//   // si tenemos cosas asyncronas retornamos una funcion
//   try {
//     return async function (dispatch) {
//       // puedo hacer mi tarea asyncrona (fetch a una api)
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       console.log(response);
//       return dispatch({ type: GET_USERS, payload: response.data });
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };
