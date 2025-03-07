import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Please fill in all fields" });
      return;
    }
    this.setState({ error: "" });
    this.props.onLogin();
  };

  render() {
    return (
      <div className="container-fluid min-vh-100 bg-light d-flex justify-content-center align-items-center">
        <div className="card shadow border-0" style={{ maxWidth: "400px" }}>
          <div className="card-header bg-danger text-white text-center py-3">
            <h3 className="mb-0">
              <i className="bi bi-hospital-fill me-2"></i>
              Hospital Login
            </h3>
          </div>
          <div className="card-body p-4">
            <p className="text-muted text-center mb-4">
              Access your blood bank dashboard
            </p>

            {this.state.error && (
              <div className="alert alert-danger" role="alert">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                {this.state.error}
              </div>
            )}

            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <div className="input-group">
                  <span className="input-group-text bg-danger text-white">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control border-danger"
                    name="email"
                    placeholder="Enter hospital email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-danger text-white">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control border-danger"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-danger w-100 py-2 mb-3 shadow-sm"
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Login
              </button>

              <div className="d-flex align-items-center justify-content-between mt-4">
                <a href="#" className="text-danger small">
                  <i className="bi bi-question-circle me-1"></i>
                  Forgot Password?
                </a>
                <Link to="../register" className="text-danger small">
                  <i className="bi bi-person-plus-fill me-1"></i>
                  Register Hospital
                </Link>
              </div>
            </form>
          </div>
          <div className="card-footer bg-white py-3 text-center border-0">
            <div className="text-center">
              <img 
                src={logo}
                alt="DonoNet Logo" 
                style={{ height: "30px" }} 
                className="me-2"
              />
              <span className="text-danger fw-bold">DonorNet</span>
              <span className="text-muted small"> - Connecting Life Savers</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;