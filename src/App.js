import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FindDonor from "./pages/FindDonor";
import Donate from "./pages/Donate";
import Requests from "./pages/Requests";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-donor" element={<FindDonor />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/requests" element={<Requests />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


