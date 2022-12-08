// import { BrowserRouter as Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import PharmacyPage from "./components/PharmacyPage";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);
  return (
    <>
      {/* <NavBar user={user} setUser={setUser} /> */}
      <main>
        {user ? (
          <Routes>
            <Route path="/pharmacies" element={<PharmacyPage />} />
          </Routes>
        ) : (
          <div className="Home">
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route path="/login" element={<Login user={user} />} />
                  <Route
                    path="/register"
                    element={<Register setUser={setUser} />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
