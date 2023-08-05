import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popular from "./components/Popular";
import AnimeItem from "./components/AnimeItem";
import { useGlobalContext } from "./context/global";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
