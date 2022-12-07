// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import NavBar from "./components/NavBar";
import Home from "./components/Home";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
      <Home />
      {/* <NavBar user={user} setUser={setUser} /> */}
      {/* <main> */}
      {/* <Router> */}
      {/* <Routes> */}
      {/* <Route exact path="/" element={<Home user={user} />} /> */}
      {/* <Route
              exact
              path="/pharmacy"
              element={<PharmacyPage user={user} />}
            /> */}
      {/* </Routes> */}
      {/* </Router> */}
      {/* </main> */}
    </div>
  );
}

export default App;
