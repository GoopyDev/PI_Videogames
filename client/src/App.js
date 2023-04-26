import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import GameDetails from "./components/GameDetails/GameDetails";
import CreateGameForm from "./components/CreateGameForm/CreateGameForm";

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <h1>Henry Videogames</h1>
      {/* Configuración de rutas */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/DetailPage" element={<GameDetails />} />
        <Route path="/NewGame" element={<CreateGameForm />} />
        {/* <Route path="/About" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
