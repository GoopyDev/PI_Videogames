// prettier-ignore
const globalState = {
  apiGames  : [], // Juegos de la api
  newDbGames: [], // Juegos de la DB
  detail    : [], // Juegos buscados desde la SearchBar
  // searchGame: {}, // Juego buscado desde la SearchBar
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
      // console.log("PAYLOAD: ");
      // console.log(action.payload);
      // console.log([action.payload]);
      // console.log([...action.payload]);
      return { ...state, detail: [action.payload] };
    // apiGames: action.payload,
    // newDbGames: [...state.newDbGames, ...action.payload],
    // };
    case "GET_VIDEOGAME_BY_NAME":
      // console.log("PAYLOAD: ");
      // console.log(action.payload);
      // console.log([action.payload]);
      // console.log([...action.payload]);
      return { ...state, detail: [action.payload] };
    case "CLEAN_DETAIL":
      return { ...state, detail: [] };
    case "ADD_VIDEOGAME":
      return {
        ...state,
        newDbGames: [...state.newDbGames, action.payload],
      };
    case "ORDER_GAMES":
      let api = [];
      let db = [];
      let det = [];
      if (state.apiGames) {
        api = [...state.apiGames];
        console.log("API:");
        console.log(api);
        console.log("-------------");
      }
      if (state.dbGames) {
        db = [...state.dbGames];
        console.log("DB:");
        console.log(db);
        console.log("-------------");
      }

      // details: [{apiGames: {}, dbGames: []}]
      if (state.detail[0]?.apiGames) {
        det.push(...state.detail[0].apiGames.results);
        console.log("DETAIL[0]:");
        console.log(det);
        console.log("-------------");
      }
      if (state.detail[0]?.dbGames) {
        det.push(...state.detail[0].dbGames);
        console.log("DETAIL[1]:");
        console.log(det);
        console.log("-------------");
      }

      if (action.payload.toLowerCase() === "a-z") {
        console.log("Ordenando por Nombre Ascendente");
        api?.sort((a, b) => a.name.localeCompare(b.name));
        db?.sort((a, b) => a.name.localeCompare(b.name));
        det[0]?.sort((a, b) => a.name.localeCompare(b.name));
        det[1]?.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload.toLowerCase() === "z-a") {
        console.log("Ordenando por Nombre Descendente");
        api?.sort((a, b) => b.name.localeCompare(a.name));
        db?.sort((a, b) => b.name.localeCompare(a.name));
        det[0]?.sort((a, b) => b.name.localeCompare(a.name));
        det[1]?.sort((a, b) => b.name.localeCompare(a.name));
      }
      if (action.payload.toLowerCase() === "rating asc") {
        console.log("Ordenando por Rating Ascendente");
        api?.sort((a, b) => a.rating - b.rating);
        db?.sort((a, b) => a.rating - b.rating);
        det[0]?.sort((a, b) => a.rating - b.rating);
        det[1]?.sort((a, b) => a.rating - b.rating);
      }
      if (action.payload.toLowerCase() === "rating des") {
        console.log("Ordenando por Rating Ascendente");
        api?.sort((a, b) => b.rating - a.rating);
        db?.sort((a, b) => b.rating - a.rating);
        det[0]?.sort((a, b) => b.rating - a.rating);
        det[1]?.sort((a, b) => b.rating - a.rating);
      }
      return {
        ...state,
        apiGames: [...api],
        dbGames: [...db],
        // state.detail[0].apiGames.results
        detail: [
          {
            apiGames: state.detail[0]?.apiGames
              ? { ...state.detail[0]?.apiGames, results: [...det[0]] }
              : null,
            dbGames: state.detail[0]?.dbGames
              ? [...state.detail[0]?.dbGames, ...det[1]]
              : null,
          },
        ],
      };
    default:
      return { ...state };
  }
}
