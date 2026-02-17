import { useLocation, useNavigate } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="confirm-container">
        <h2>No booking found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="confirm-container">
      <h2>Seat Booked Successfully!</h2>

      <p><strong>Booking ID:</strong> {state.bookingId}</p>
      <p><strong>Movie:</strong> {state.movie?.title}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>

      <button onClick={() => navigate("/")}>Book Another</button>
    </div>
  );
}

export default Confirmation;
