import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import "./style.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.some((fav) => fav.id === movie.id)
        ? prevFavorites.filter((fav) => fav.id !== movie.id)
        : [...prevFavorites, movie];
    });
  };

  return (
    <Router>
      <header className="navbar">
        <h1>Кинопоиск</h1>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/search">Поиск</Link>
          <Link to="/favorites">Избранное</Link>
        </nav>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home toggleFavorite={toggleFavorite} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;