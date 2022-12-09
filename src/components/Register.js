import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register({ setUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_Number] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        email,
        phone_number,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user);
            navigate("/pharmacies");
            localStorage.setItem("me", JSON.stringify(user));
          });
        }
      })
      .catch((e) => {
        console.log("error Sending Data" + e);
      });
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Register</h3>
      <div className="mb-3">
        <label>Name</label>
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input
          id="location"
          type="text"
          className="form-control"
          value={location}
          placeholder="Enter your location"
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Phone Number</label>
        <input
          id="phone_number"
          type="text"
          className="form-control"
          value={phone_number}
          placeholder="Enter your phone number"
          onChange={(e) => setPhone_Number(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          id="password_confirmation"
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
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
