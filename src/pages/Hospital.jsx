import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Hospital() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  return (

    <div>
      <Navbar />
      <div style={styles.container}>
        <Routes>
          <Route
            path="login"
            element={
              isAuthenticated ?
                <Navigate to="../dashboard" replace /> :
                <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="register"
            element={
              isAuthenticated ?
                <Navigate to="../dashboard" replace /> :
                <Register onRegister={handleRegister} />
            }
          />
          <Route
            path="dashboard"
            element={
              isAuthenticated ?
                <Dashboard /> :
                <Navigate to="../login" replace />
            }
          />
          <Route path="" element={<Navigate to="login" replace />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

const styles = {
  container: {
    margin: 0,
    padding: 0,
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  }
};

export default Hospital;
