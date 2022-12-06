import React from "react";

export default function RegisterForm() {
  return (
    <form>
      <h3>Register</h3>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Fullname"
        />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input type="text" className="form-control" placeholder="Location" />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Contact</label>
        <input
          type="text"
          className="form-control"
          placeholder="Contact details"
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
        Already registered?<a href="/sign-in">Login</a>
      </p>
    </form>
  );
}
