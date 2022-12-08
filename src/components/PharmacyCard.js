import React from "react";
// import { Card } from "react-bootstrap";

export default function PharmacyCard({ pharmacy }) {
  return (
    <>
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
                  <a href="/" className="btn btn-primary">
                    Check Available Medicine
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
