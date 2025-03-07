import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Hospital from "./pages/Hospital";
import FindDonor from "./pages/FindDonor";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container-fluid p-0">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/hospital/*" element={<Hospital />} />
            <Route path="/find-donor" element={<FindDonor />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;