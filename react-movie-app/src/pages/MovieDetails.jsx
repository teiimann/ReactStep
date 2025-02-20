import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css"; // Подключаем стили

function MovieDetails() {
  let { id } = useParams();
  const titleRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="movie-details-container">
      <h1 ref={titleRef}>🎬 Детали фильма {id}</h1>
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Назад
      </button>
    </div>
  );
}

export default MovieDetails;
