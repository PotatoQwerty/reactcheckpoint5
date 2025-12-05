import { Link } from "react-router";
function MovieCard({ title, posterURL, description, rating, id }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={posterURL} alt={title} />
        <h1>{title}</h1>
      </Link>
      <p>{description}</p>
      <p>{rating}</p>
    </div>
  );
}

export default MovieCard;
