import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register({ setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user));
          navigate("/pharmacies");
        }
      })
      .catch((err) => {
        setFormData("error Sending Data" + err);
      });
  }
  return (
    <form onChange={setFormData} onSubmit={handleFormSubmit}>
      <h3>Register</h3>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your location"
          required
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-3">
        <label>Phone Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          required
        />
      </div>
      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered?
        <NavLink to="/login"> Login</NavLink>
      </p>
    </form>
  );
}
