import React from 'react'

function AssignmentsSummaryCard() {
  return (
    <div className="card border-0 rounded-4 text-white cardAnimation" style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}>
        <div className="card-body p-4">
            <h5>Assignments Summary</h5>
            <h1 className="fw-bold">48</h1>
            <p className="mb-3">
                Active assignments across all branches
            </p>

            <hr className="border-light" />

            <small>
                <i className="fas fa-info-circle me-2"></i>
                5 assignments due this week
            </small>
        </div>
    </div>
  )
}

export default AssignmentsSummaryCard;