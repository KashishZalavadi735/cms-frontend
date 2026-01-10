import React from 'react'

function TotalProfessorCard() {
  return (
    <div className="card border-0 rounded-4 text-white cardAnimation" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>
        <div className="card-body p-4">
            <h5>Professors Summary</h5>
            <h1 className="fw-bold">24</h1>
            <p className="mb-3">
                In Computer Department
            </p>

            <hr className="border-light" />

            <small>
                <i className="fas fa-book me-2"></i>
                86 subjects assigned
            </small>
        </div>
    </div>
  )
}

export default TotalProfessorCard;