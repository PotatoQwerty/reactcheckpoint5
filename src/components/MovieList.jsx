import { useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

function MovieList({ movies, onAddMovie }) {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAdd = (movie) => {
    onAddMovie(movie);
    setShowAddModal(false);
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.title} />
      ))}

      <div
        className="movie-card add-movie-card"
        onClick={() => setShowAddModal(true)}
      >
        <div className="plus-icon">+</div>
        <h3>Add Movie</h3>
      </div>

      {showAddModal && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target.className === "modal-overlay") setShowAddModal(false);
          }}
        >
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setShowAddModal(false)}
            >
              ×
            </button>
            <AddMovie onAdd={handleAdd} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
