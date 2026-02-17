import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BookingForm.css";

function BookingForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state;

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingId = Math.floor(100000 + Math.random() * 900000);

    navigate("/confirmation", {
      state: { ...form, bookingId, movie }
    });
  };

  return (
    <div className="form-container">
      <h2>Book Seat for {movie?.title}</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="mobile"
          placeholder="Enter Mobile"
          value={form.mobile}
          onChange={handleChange}
          required
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
