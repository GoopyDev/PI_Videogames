// import {
//   GET_VIDEOGAMES,
//   GET_DETAIL,
//   CLEAN_DETAIL,
//   ADD_VIDEOGAME,
// } from "./action-types";

const globalState = {
  apiGames: [], // los de la api
  newDbGames: [], // los que habia creados + los de la api + el nuevo creado
  detail: {},
};

export default function rootReducer(state = globalState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        apiGames: action.payload.apiGames.results,
        newDbGames: [...state.newDbGames, ...action.payload.dbGames],
      };
    case "GET_VIDEOGAME_BY_ID":
      console.log("PAYLOAD: ");
      console.log(action.payload);
      return { ...state, detail: action.payload };
    // apiGames: action.payload,
    // newDbGames: [...state.newDbGames, ...action.payload],
    // };
    case "GET_DETAIL":
      return { ...state, detail: action.payload };
    case "CLEAN_DETAIL":
      return { ...state, detail: {} };
    case "ADD_VIDEOGAME":
      return {
        ...state,
        newDbGames: [...state.newDbGames, ...state.apiGames, action.payload],
      };
    default:
      return { ...state };
  }
}
