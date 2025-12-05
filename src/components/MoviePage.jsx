import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

function MoviePage() {
  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState();
  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => setMovie(data.find((movie) => movie.id === Number(id))))
      .catch((err) => console.error("Error fetching movies:", err));
  }, [id]);

  if (!movie) {
    return <div className="loading">Loading...</div>;
  }
  console.log(movie);

  return (
    <div className="movie-page">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      <div className="movie-page-content">
        <div className="movie-page-poster">
          <img src={movie.posterURL} alt={movie.title} />
        </div>
        <div className="movie-page-details">
          <h1>{movie.title}</h1>
          <p className="movie-description">{movie.description}</p>
          <div className="movie-rating">
            <span>Rating:</span> {movie.rating} / 10
          </div>
          <div className="movie-trailer">
            <h3>Watch Trailer</h3>
            <iframe
              src={movie.trailerURL}
              title={movie.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
