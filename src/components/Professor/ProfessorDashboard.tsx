"use client";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfessorDashboard() {
  return (
    <div
      className="card shadow-sm border-0 py-5 px-4"
      style={{
        background: "linear-gradient(90deg, #2F3C7E, #374785, #4B56A0)",
      }}
    >
      <div>
        <div className="row d-flex align-items-center mb-4">
          <div className="col-auto me-3 ">
            <div
              className="d-flex align-items-center justify-content-center dashboard-icon"
              style={{ background: "rgba(255, 255, 255, 0.2)" }}
            >
              <FontAwesomeIcon icon={faUser} className="text-white" />
            </div>
          </div>
          <div className="col">
            <small className="text-light opacity-75">Professor ID</small>
            <h6 className="text-white fw-bold">PROF_001</h6>
          </div>
        </div>
        
        <hr className="border-light" />

        <div className="row">
          <h5 className="text-white fw-bold mb-1">
            Welcome back, Professor!
          </h5>
          <small className="text-light">
            Here's your dashboard with all the important information.
          </small>
        </div>

        
      </div>
    </div>
  )
}

export default ProfessorDashboard