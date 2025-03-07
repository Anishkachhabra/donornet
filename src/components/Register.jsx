import React, { useState } from 'react';

function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    hospitalName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    licenseNumber: '',
    specialties: [],
    emergencyContact: '',
    website: '',
    description: ''
  });

  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);

  const specialtyOptions = [
    'General Hospital',
    'Trauma Center',
    "Children's Hospital",
    'Cancer Center',
    'Cardiac Center',
    'Mental Health',
    'Rehabilitation'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const specialties = [...formData.specialties];
      if (checked) {
        specialties.push(value);
      } else {
        const index = specialties.indexOf(value);
        if (index > -1) {
          specialties.splice(index, 1);
        }
      }
      setFormData((prev) => ({ ...prev, specialties }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.hospitalName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    onRegister(formData);
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow border-0 w-100" style={{ maxWidth: '700px' }}>
        <div className="card-header bg-danger text-white text-center py-3">
          <h2 className="mb-0"><i className="bi bi-hospital me-2"></i>Hospital Registration</h2>
        </div>
        
        <div className="card-body p-4">
          <p className="text-center text-muted mb-4">Join our healthcare network and help save lives through blood donation</p>
          
          {error && (
            <div className="alert alert-danger" role="alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Hospital Name <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-building"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  name="hospitalName" 
                  value={formData.hospitalName} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Email Address <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <i className="bi bi-telephone"></i>
                  </span>
                  <input 
                    type="tel" 
                    className="form-control" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">License Number <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-card-heading"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  name="licenseNumber" 
                  value={formData.licenseNumber} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Address <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-geo-alt"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">City <span className="text-danger">*</span></label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">State <span className="text-danger">*</span></label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="state" 
                  value={formData.state} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label">Password <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                    minLength={8} 
                  />
                </div>
                <div className="form-text">Minimum 8 characters</div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Confirm Password <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input 
                    type="password" 
                    className="form-control" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label d-block">Hospital Specialties</label>
              <div className="bg-light p-3 rounded">
                <div className="row">
                  {specialtyOptions.map((specialty) => (
                    <div className="col-md-6 mb-2" key={specialty}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`specialty-${specialty}`}
                          value={specialty}
                          checked={formData.specialties.includes(specialty)}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor={`specialty-${specialty}`}>
                          {specialty}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-danger btn-lg py-2">
                <i className="bi bi-hospital-fill me-2"></i>
                Register Hospital
              </button>
            </div>

            <div className="mt-3 text-center">
              <p className="text-muted">
                Already registered? <a href="#" className="text-danger">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;