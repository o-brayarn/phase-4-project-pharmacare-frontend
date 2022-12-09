import React, { useState, useEffect } from "react";

export default function Catalogue() {
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    fetch(`/pharmacies/{:pharmacy_id}/medicines`)
      .then((res) => res.json())
      .then((medicines) => setMedicines(medicines));
  }, []);
  console.log(medicines);
  return (
    <>
      {medicines.map((medicine) => {
        return (
          <div className="new-spacing">
            <div className="container mt-5 mb-3" key={medicine.id}>
              <div className="row">
                <div className="col-md-4">
                  <div className="card p-3 mb-2">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        className="card-img-top"
                        src={medicine.image_url}
                        alt="Medicine should  be here"
                      />
                      <div className="card-body">
                        <p className="card-text">{medicines.name}</p>
                        <p className="card-text">{medicine.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
