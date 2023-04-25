import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_BY_ID,
  CLEAN_DETAIL,
  ADD_VIDEOGAME,
} from "./action-types";
import axios from "axios";

// defino mis funciones "action creators"

export const getVideogames = () => {
  return async function (dispatch) {
    console.log("Obteniendojuegos...");
    const data = await axios
      .get("http://localhost:3001/videogames")
      // .then((info) => info.json())
      .then((response) => {
        console.log("Data:");
        console.log(response.data);
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
    console.log("Obteniendo detalles del juego...");
    const data = await axios(
      `http://localhost:3001/videogames/${id}?source=${source}`
    )
      .then((response) => {
        console.log("Data:");
        console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
    dispatch({ type: GET_VIDEOGAME_BY_ID, payload: data });
  };
};

// export const getDetail = (id, source = "API") => {
//   return async function (dispatch) {
//     await axios(`http://localhost:3001/Videogames/${id}?source=${source}`)
//       .then((info) => info.json())
//       .then((response) => dispatch({ type: GET_DETAIL, payload: response }))
//       .catch((error) => console.log(error));
//   };
// };

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
