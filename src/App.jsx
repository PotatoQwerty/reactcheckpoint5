import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterChange = (name, value) => {
    if (name === "title") {
      setFilterTitle(value);
    } else if (name === "rating") {
      setFilterRating(value);
    }
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const matchesRating = filterRating
      ? movie.rating >= Number(filterRating)
      : true;
    return matchesTitle && matchesRating;
  });

  return (
    <div className="app-container">
      <h1 className="app-title">Movie List</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} onAddMovie={handleAddMovie} />
    </div>
  );
}

export default App;
