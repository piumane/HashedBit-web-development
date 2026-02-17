import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="details-container">
      <h2>{movie.title}</h2>

      <img src={movie.img} alt={movie.title} />

      <p>This is a great movie you selected.</p>

      <button onClick={() => navigate("/book", { state: movie })}>
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;
