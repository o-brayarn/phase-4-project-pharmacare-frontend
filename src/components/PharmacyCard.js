import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import Catalogue from "./Catalogue";

export default function PharmacyCard({ pharmacy }) {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/catalogue");

    // window.location.href = ``;
    console.log("I'm supposed to lead somewhere");
  }
  return (
    <div className="new-spacing">
      <div className="container mt-5 mb-3" key={pharmacy.id}>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 mb-2">
              <div className="d-flex flex-row align-items-center">
                <div className="card-body">
                  <h5 className="card-title">{pharmacy.name}</h5>
                  <p className="card-text">{pharmacy.location}</p>
                  <p className="card-text">{pharmacy.address}</p>
                  <p className="card-text">Email: {pharmacy.email}</p>
                  <p className="card-text">Call:{pharmacy.phone_number}</p>
                  <NavLink to="/catalogue">
                    <button
                      href="/"
                      className="btn btn-primary"
                      onClick={handleClick}
                    >
                      Check Available Medicine
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
