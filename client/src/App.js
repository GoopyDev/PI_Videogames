import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import GameDetails from "./components/GameDetails/GameDetails";
import CreateGameForm from "./components/CreateGameForm/CreateGameForm";
import SearchPage from "./components/SearchPage/SearchPage";
import About from "./components/About/About";

function App() {
  const location = useLocation();
  const urlsExcluidas = ["/", "/about"];

  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      {/* NavBar */}
      {!urlsExcluidas.includes(location.pathname.toLowerCase()) && <NavBar />}
      {/* Configuración de rutas */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/DetailPage" element={<GameDetails />} />
        <Route path="/NewGame" element={<CreateGameForm />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
