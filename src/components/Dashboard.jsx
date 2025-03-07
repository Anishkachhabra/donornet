import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [bloodStock, setBloodStock] = useState({
    'A+': 0,
    'A-': 0,
    'B+': 0,
    'B-': 0,
    'AB+': 0,
    'AB-': 0,
    'O+': 0,
    'O-': 0,
  });
  const [editing, setEditing] = useState(false);
  const [tempStock, setTempStock] = useState({});

  useEffect(() => {
    setTempStock({ ...bloodStock });
  }, [editing, bloodStock]);

  const handleStockChange = (bloodType, value) => {
    const numValue = parseInt(value, 10) || 0;
    setTempStock(prev => ({
      ...prev,
      [bloodType]: numValue
    }));
  };

  const handleSave = () => {
    setBloodStock({ ...tempStock });
    setEditing(false);
  };

  const handleCancel = () => {
    setTempStock({ ...bloodStock });
    setEditing(false);
  };

  // Helper function to determine stock level class
  const getStockLevelClass = (units) => {
    if (units === 0) return 'text-danger fw-bold';
    if (units < 5) return 'text-warning fw-bold';
    return 'text-success fw-bold';
  };

  return (
    <div className="container-fluid py-4 bg-light">
      {/* Dashboard Header */}
      <div className="card shadow-sm mb-4 border-0">
        <div className="card-header bg-danger text-white py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">Blood Bank Dashboard</h2>
            <div>
              {!editing ? (
                <button 
                  className="btn btn-outline-light" 
                  onClick={() => setEditing(true)}
                >
                  <i className="bi bi-pencil me-2"></i>
                  Edit Stock
                </button>
              ) : (
                <div>
                  <button 
                    className="btn btn-light me-2" 
                    onClick={handleSave}
                  >
                    <i className="bi bi-check-lg me-1"></i>
                    Save
                  </button>
                  <button 
                    className="btn btn-outline-light" 
                    onClick={handleCancel}
                  >
                    <i className="bi bi-x-lg me-1"></i>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="card-body p-4">
          {/* Summary Cards */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="text-secondary mb-3">Blood Inventory Overview</h5>
                  <div className="d-flex flex-wrap">
                    {Object.entries(bloodStock).map(([type, units]) => (
                      <span 
                        key={`badge-${type}`}
                        className={`badge ${units === 0 ? 'bg-danger' : units < 5 ? 'bg-warning' : 'bg-success'} me-2 mb-2 p-2`}
                      >
                        {type}: {units} units
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blood Stock Grid */}
          <h5 className="text-secondary mb-3">Blood Type Inventory</h5>
          <div className="row g-3">
            {Object.entries(bloodStock).map(([bloodType, units]) => (
              <div key={bloodType} className="col-md-3 col-sm-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <span 
                        className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                        style={{width: '60px', height: '60px', fontSize: '1.2rem'}}
                      >
                        {bloodType}
                      </span>
                    </div>
                    <h4>{bloodType}</h4>
                    {editing ? (
                      <div className="form-group">
                        <label className="form-label text-muted">Units Available</label>
                        <input
                          type="number"
                          min="0"
                          className="form-control text-center mx-auto"
                          style={{maxWidth: '100px'}}
                          value={tempStock[bloodType] || 0}
                          onChange={(e) => handleStockChange(bloodType, e.target.value)}
                        />
                      </div>
                    ) : (
                      <div>
                        <p className="text-muted mb-1">Units Available</p>
                        <h3 className={getStockLevelClass(units)}>
                          {units}
                        </h3>
                      </div>
                    )}
                  </div>
                  <div className={`card-footer text-center border-0 ${units === 0 ? 'bg-danger text-white' : 'bg-light'}`}>
                    {units === 0 ? "CRITICAL" : units < 5 ? "LOW STOCK" : "SUFFICIENT"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Emergency Contact */}
      <div className="card border-danger border-start-0 border-end-0 border-bottom-0 border-5 shadow-sm p-3 mt-4">
        <div className="row align-items-center">
          <div className="col-md-1 text-danger text-center">
            <i className="bi bi-exclamation-circle-fill fs-1"></i>
          </div>
          <div className="col-md-11">
            <h5 className="text-danger mb-0">Low on Blood Supply?</h5>
            <p className="mb-0">Contact the central blood bank immediately at <strong>1-800-RED-CROSS</strong> or schedule an emergency donation drive.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;