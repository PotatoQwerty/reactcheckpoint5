import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Movie List</h1>
      <MovieList movies={movies} onAddMovie={handleAddMovie} />
    </div>
  );
}

export default App;
