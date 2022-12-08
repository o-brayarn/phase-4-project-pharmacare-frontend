import React, { useState, useEffect } from "react";
// import NavBar from "./NavBar";
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
    <>
      {/* <NavBar /> */}
      {pharmacies.map((pharmacy) => {
        return <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />;
      })}
    </>
  );
}
