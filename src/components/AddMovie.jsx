import { useState, useRef } from "react";

function AddMovie({ onAdd }) {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setMovie((prev) => ({
          ...prev,
          [name]: objectUrl,
        }));
      }
    } else {
      setMovie((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.title && movie.posterURL && movie.description && movie.rating) {
      onAdd({ ...movie, rating: Number(movie.rating) });
      setMovie({ title: "", description: "", posterURL: "", rating: "" });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={movie.title}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="posterURL"
          accept="image/*"
          onChange={handleChange}
          ref={fileInputRef}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-10)"
          min="0"
          max="10"
          step="0.1"
          value={movie.rating}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={movie.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
