import React, { useState, useEffect } from "react";
import PharmacyCard from "./PharmacyCard";
export default function PharmacyPage() {
  const [pharmacies, setPharmacies] = useState([]);
  useEffect(() => {
    fetch("/pharmacies")
      .then((res) => res.json())
      .then((pharmacy) => setPharmacies(pharmacy));
  }, []);
  console.log(pharmacies);

  return (
    <div className="container">
      <div className="row">
        {pharmacies.map((pharmacy) => {
          return (
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
