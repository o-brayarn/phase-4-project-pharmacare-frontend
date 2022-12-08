import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login({ setUser }) {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user));
          nav("/pharmacies");
        }
      })
      .catch((e) => {
        console.log("error Sending Data" + e);
      });
  }

  return (
    <form onChange={setFormData} onSubmit={handleSubmit}>
      <h3>Login</h3>
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
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          required
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="reset">password?</a>
      </p>
      <p className="forgot-password">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
}
