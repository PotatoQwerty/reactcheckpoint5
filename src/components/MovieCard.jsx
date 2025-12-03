function MovieCard({ title, posterURL, description, rating }) {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{rating}</p>
    </div>
  );
}

export default MovieCard;
