import movies from "../data/movies";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <h2>Choose a K-Drama</h2>

      <div className="grid">
        {movies.map((m) => (
          <div
            key={m.id}
            className="card"
            onClick={() => navigate(`/movie/${m.id}`)}
          >
            <img src={m.img} alt={m.title} />
            <p>{m.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
