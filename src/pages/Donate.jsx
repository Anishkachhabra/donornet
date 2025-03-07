import React, { useState, useEffect } from 'react';
import Heart from "../images/logo.png";

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  email: '',
  phone: '',
  bloodType: '',
  weight: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  hasDiabetes: '',
  hasHeartCondition: '',
  hasHypertension: '',
  hasTattoo: '',
  lastDonationDate: '',
  medications: '',
  preferredDays: '',
  preferredTime: '',
  emergencyContact: '',
  emergencyPhone: '',
  additionalNotes: ''
};

function Donate() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('donorData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('donorData', JSON.stringify(formData));
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="container py-5 bg-light">
      <div className="text-center mb-4">
        <div className="d-flex align-items-center justify-content-center">
          <img src={Heart} alt="Heart" width="50" height="50" /> 
          <h1 className="text-danger fw-bold">Blood Donation Registration</h1>
        </div>
        <p className="text-secondary">Join us in saving lives through blood donation</p>
      </div>

      <div className="card shadow p-4 mb-5">
        <form onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <h2 className="text-danger mb-3">Personal Information</h2>
          
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <label htmlFor="firstName">First Name</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="dateOfBirth">Date of Birth</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="gender">Gender</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
                <label htmlFor="email">Email Address</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="bloodType"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                <label htmlFor="bloodType">Blood Type</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Weight (kg)"
                  required
                />
                <label htmlFor="weight">Weight (kg)</label>
              </div>
            </div>
          </div>

          {/* Address Information Section */}
          <h2 className="text-danger mb-3 mt-4">Address Information</h2>
          
          <div className="row g-3 mb-4">
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="Street Address"
                  required
                />
                <label htmlFor="streetAddress">Street Address</label>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />
                <label htmlFor="city">City</label>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  required
                />
                <label htmlFor="state">State</label>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="ZIP Code"
                  required
                />
                <label htmlFor="zipCode">ZIP Code</label>
              </div>
            </div>
          </div>

          {/* Medical History Section */}
          <h2 className="text-danger mb-3 mt-4">Medical History</h2>
          
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="hasDiabetes"
                  name="hasDiabetes"
                  value={formData.hasDiabetes}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label htmlFor="hasDiabetes">Do you have diabetes?</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="hasHeartCondition"
                  name="hasHeartCondition"
                  value={formData.hasHeartCondition}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label htmlFor="hasHeartCondition">Any heart conditions?</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="lastDonationDate"
                  name="lastDonationDate"
                  value={formData.lastDonationDate}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="lastDonationDate">Last Donation Date</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="medications"
                  name="medications"
                  value={formData.medications}
                  onChange={handleChange}
                  placeholder="Current Medications"
                  style={{ height: '100px' }}
                />
                <label htmlFor="medications">Current Medications</label>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <h2 className="text-danger mb-3 mt-4">Donation Preferences</h2>
          
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="preferredDays"
                  name="preferredDays"
                  value={formData.preferredDays}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Preferred Days</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="any">Any Day</option>
                </select>
                <label htmlFor="preferredDays">Preferred Days</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Preferred Time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 8PM)</option>
                </select>
                <label htmlFor="preferredTime">Preferred Time</label>
              </div>
            </div>
          </div>

          {/* Emergency Contact Section */}
          <h2 className="text-danger mb-3 mt-4">Emergency Contact</h2>
          
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  placeholder="Emergency Contact Name"
                  required
                />
                <label htmlFor="emergencyContact">Emergency Contact Name</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="tel"
                  className="form-control"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  placeholder="Emergency Contact Phone"
                  required
                />
                <label htmlFor="emergencyPhone">Emergency Contact Phone</label>
              </div>
            </div>

            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Additional Notes"
                  style={{ height: '100px' }}
                />
                <label htmlFor="additionalNotes">Additional Notes or Medical Conditions</label>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn btn-danger btn-lg"
            >
              <i className="bi bi-heart me-2"></i>
              Register as Donor
            </button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
          <div className="toast show bg-success text-white" role="alert">
            <div className="toast-body p-3">
              Registration saved successfully!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Donate;