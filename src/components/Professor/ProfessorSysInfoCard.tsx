import React from 'react'

function ProfessorSysInfoCard() {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4 cardAnimation">
      <div className="card-body p-4">
        <h5 className="fw-semibold mb-3">System Information</h5>
        <div>
          <div className="d-flex justify-content-between">
            <p className="text-muted">Total Students</p>
            <p className="fw-medium">1,254</p>
          </div>

          <div className="d-flex justify-content-between">
            <p className="text-muted">Active Assignments</p>
            <p className="fw-medium">48</p>
          </div>

          <div className="d-flex justify-content-between">
            <p className="text-muted">Departments</p>
            <p className="fw-medium">5</p>
          </div>

          <div className="d-flex justify-content-between">
            <p className="text-muted">System Version</p>
            <p className="fw-medium">v2.0.1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessorSysInfoCard