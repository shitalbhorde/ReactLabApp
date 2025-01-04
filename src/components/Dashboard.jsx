import React from "react";

function Dashboard() {
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="h2 mb-4">Dashboard</h1>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Patients</h5>
                  <h2 className="mb-0">1,234</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Active Tests</h5>
                  <h2 className="mb-0">56</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Pending Reports</h5>
                  <h2 className="mb-0">23</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">QC Alerts</h5>
                  <h2 className="mb-0">3</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  export default Dashboard;