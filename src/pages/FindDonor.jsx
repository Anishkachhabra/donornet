import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Simple Bootstrap version without Lucide icons, using Bootstrap Icons instead
function FindDonor() {
  const [preferences, setPreferences] = useState({
    bloodType: 'A+',
    searchType: 'hospital',
    location: '',
    urgency: 'immediate'
  });

  const [searchPerformed, setSearchPerformed] = useState(false);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const fetchResults = async () => {
    setIsLoading(true);
    
    try {
      // Simulating API call with mock data
      setTimeout(() => {
        setResults(getMockResults());
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching results:', error);
      setResults(getMockResults());
      setIsLoading(false);
    }
  };

  const getMockResults = () => {
    return [
      {
        id: '1',
        name: 'City General Hospital',
        type: 'hospital',
        distance: '0.8 miles',
        bloodType: 'A+',
        address: '123 Medical Center Blvd',
        phone: '(555) 123-4567',
        availability: 'Immediate'
      },
      {
        id: '2',
        name: 'John Smith',
        type: 'donor',
        distance: '1.2 miles',
        bloodType: 'A+',
        address: '456 Oak Street',
        phone: '(555) 987-6543',
        availability: 'Within 1 hour'
      },
      {
        id: '3',
        name: 'Memorial Hospital',
        type: 'hospital',
        distance: '2.5 miles',
        bloodType: 'A+',
        address: '789 Healthcare Ave',
        phone: '(555) 246-8135',
        availability: 'Immediate'
      }
    ];
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchPerformed(true);
    fetchResults();
  };

  return (
    <div className="bg-light min-vh-100">
      {/* <header className="bg-danger text-white py-3 shadow">
        <div className="container">
          <div className="d-flex align-items-center">
            <i className="bi bi-droplet-fill fs-3 me-2"></i>
            <h1 className="h3 mb-0">LifeLink Blood Finder</h1>
          </div>
          <p className="mt-1 mb-0">Connect with blood donors and hospitals near you</p>
        </div>
      </header> */}
      <Navbar />

      <main className="container py-4">
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-header bg-white border-bottom border-danger border-3">
            <h2 className="h5 mb-0 text-danger">Find Blood Donors & Supplies</h2>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSearch}>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="mb-4">
                    <label className="form-label fw-bold">I'm looking for</label>
                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        onClick={() => setPreferences(prev => ({ ...prev, searchType: 'hospital' }))}
                        className={`btn ${preferences.searchType === 'hospital' ? 'btn-danger' : 'btn-outline-danger'} flex-grow-1`}
                      >
                        <i className="bi bi-hospital me-1"></i>
                        Hospital Stock
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreferences(prev => ({ ...prev, searchType: 'donor' }))}
                        className={`btn ${preferences.searchType === 'donor' ? 'btn-danger' : 'btn-outline-danger'} flex-grow-1`}
                      >
                        <i className="bi bi-people-fill me-1"></i>
                        Donors
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Blood Type Needed</label>
                    <div className="row g-2">
                      {bloodTypes.map(type => (
                        <div className="col-3" key={type}>
                          <button
                            type="button"
                            onClick={() => setPreferences(prev => ({ ...prev, bloodType: type }))}
                            className={`btn btn-sm w-100 ${preferences.bloodType === type ? 'btn-danger' : 'btn-outline-danger'}`}
                          >
                            {type}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Location</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-danger"
                        value={preferences.location}
                        onChange={(e) => setPreferences(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="Enter your location"
                      />
                      <span className="input-group-text bg-danger text-white">
                        <i className="bi bi-geo-alt-fill"></i>
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Urgency</label>
                    <select
                      value={preferences.urgency}
                      onChange={(e) => setPreferences(prev => ({ ...prev, urgency: e.target.value }))}
                      className="form-select border-danger"
                    >
                      <option value="immediate">Immediate</option>
                      <option value="within24h">Within 24 hours</option>
                      <option value="within3days">Within 3 days</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card bg-white border-danger h-100">
                    <div className="card-body text-center d-flex flex-column justify-content-center">
                      <div className="mb-3 blood-icon">
                        <i className="bi bi-droplet-fill text-danger" style={{fontSize: "3.5rem"}}></i>
                      </div>
                      <h3 className="h4 mb-3 text-danger">Why Donate Blood?</h3>
                      <p>Your donation can save up to 3 lives. Join our community of life-savers today.</p>
                      <div className="blood-facts mt-3 p-3 bg-light rounded">
                        <div className="row g-2">
                          <div className="col-6">
                            <div className="d-flex align-items-center">
                              <i className="bi bi-heart-pulse-fill text-danger me-2"></i>
                              <span className="small">Every 2 seconds someone needs blood</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="d-flex align-items-center">
                              <i className="bi bi-person-check-fill text-danger me-2"></i>
                              <span className="small">Only 3% of eligible people donate</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-danger btn-lg w-100 py-2 shadow-sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Searching...
                  </>
                ) : (
                  <>
                    <i className="bi bi-search me-2"></i>
                    Find Blood Now
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Search Results */}
        {searchPerformed && (
          <div className="mb-4">
            <div className="d-flex align-items-center mb-3 border-bottom border-danger pb-2">
              <i className="bi bi-list-ul text-danger me-2 fs-4"></i>
              <h2 className="h5 mb-0">Search Results</h2>
            </div>
            
            {isLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Searching for matches...</p>
              </div>
            ) : (
              <div className="list-group shadow-sm">
                {results.map(result => (
                  <div
                    key={result.id}
                    className="list-group-item list-group-item-action p-4 border-start border-5 border-danger"
                  >
                    <div className="d-flex justify-content-between flex-wrap">
                      <div>
                        <div className="d-flex align-items-center mb-2">
                          <i className={`bi ${result.type === 'hospital' ? 'bi-hospital' : 'bi-person'} text-danger me-2`}></i>
                          <h3 className="h5 mb-0">{result.name}</h3>
                          <span className="badge bg-danger ms-2">{result.type}</span>
                        </div>
                        
                        <div className="d-flex flex-wrap gap-3 text-muted small mb-2">
                          <span>
                            <i className="bi bi-geo me-1"></i>
                            {result.distance}
                          </span>
                          <span>
                            <i className="bi bi-droplet me-1"></i>
                            {result.bloodType}
                          </span>
                          <span>
                            <i className="bi bi-clock-history me-1"></i>
                            {result.availability}
                          </span>
                        </div>
                      </div>
                      <button 
                        className="btn btn-outline-danger"
                        onClick={() => alert(`Contacting ${result.name} at ${result.phone}`)}
                      >
                        <i className="bi bi-telephone-fill me-1"></i>
                        Contact
                      </button>
                    </div>
                    <div className="row mt-3 pt-3 border-top">
                      <div className="col-md-6">
                        <i className="bi bi-geo-alt me-1"></i>
                        {result.address}
                      </div>
                      <div className="col-md-6">
                        <i className="bi bi-telephone me-1"></i>
                        {result.phone}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Recent Requests Section */}
        <div className="card shadow-sm border-danger border-top border-4">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-clock-history text-danger me-2 fs-4"></i>
              <h2 className="h5 mb-0">Recent Urgent Requests</h2>
            </div>
            <p className="text-muted mb-1">Search to see available donors or hospitals in your area.</p>
            <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <div>
                <strong>Emergency Need:</strong> O- blood is critically low in your area. Please donate if eligible.
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default FindDonor;