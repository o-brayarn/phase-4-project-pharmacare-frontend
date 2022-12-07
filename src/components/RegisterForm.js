import React from "react";
import { NavLink } from "react-router-dom";

export default function RegisterForm() {
  return (
    <form>
      <h3>Register</h3>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your location"
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-3">
        <label>Phone Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
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
