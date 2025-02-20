import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Favourites.css";

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  const removeFromFavourites = (id) => {
    const updatedFavourites = favourites.filter((movie) => movie.id !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const clearFavourites = () => {
    setFavourites([]);
    localStorage.removeItem("favourites");
  };

  return (
    <div className="movies-container">
      <h1>Избранные фильмы</h1>
      {favourites.length > 0 ? (
        <>
          <button className="clear-button" onClick={clearFavourites}>
            Очистить избранное
          </button>
          <div className="movies-grid">
            {favourites.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img src={movie.poster} alt={movie.title} />
                <h3>
                  {movie.title} ({movie.year})
                </h3>
                <button
                  className="remove-button"
                  onClick={() => removeFromFavourites(movie.id)}
                >
                  Удалить из избранного
                </button>
                <Link to={`/movie/${movie.id}`}>Подробнее</Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="no-favourites">У вас нет избранных фильмов</p>
      )}
    </div>
  );
}

export default Favourites;
