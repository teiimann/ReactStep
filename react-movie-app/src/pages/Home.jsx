import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const mockMovies = [
  { id: 1, title: "Inception", year: 2010, poster: "https://via.placeholder.com/150" },
  { id: 2, title: "Interstellar", year: 2014, poster: "https://via.placeholder.com/150" },
  { id: 3, title: "The Dark Knight", year: 2008, poster: "https://via.placeholder.com/150" },
];

function Home() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setMovies(mockMovies);
    const savedFavorites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (movie) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === movie.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title} ({movie.year})</h3>
          <button onClick={() => toggleFavorite(movie)}>
            {favorites.some((fav) => fav.id === movie.id) ? "❌ Удалить из избранного" : "❤ Добавить в избранное"}
          </button>
          <Link to={`/movie/${movie.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
