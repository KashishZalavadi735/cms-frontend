import React from "react";

function AssignmentCard() {
  return (
    <>
      {/* Card 1 - Pending */}
      <div className="card border-0 mb-4 shadow-sm rounded-4 cardAnimation">
        <div className="card-body p-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-start">
            <h4 className="fw-bold mb-2">Database Normalization</h4>

            <span className="badge rounded-pill bg-warning-subtle text-warning px-3 py-2">
              Pending
            </span>
          </div>

          {/* Tags */}
          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="bagde rounded-pill bg-primary-subtle text-sm-center px-3 py-1 text-primary">
              Database Management Systems
            </span>
            <span className="bagde rounded-pill bg-secondary-subtle text-sm-center px-3 py-1 text-dark">
              Semester 4
            </span>
            <span className="bagde rounded-pill bg-success-subtle text-sm-center px-3 py-1 text-success">
              Due: 15 Oct 2023
            </span>
          </div>

          {/* Description */}
          <p className="text-muted">
            Normalize the given database schema up to 3NF. Explain each
            normalization step with proper reasoning. Submit your solution in
            PDF format.
          </p>

          {/* Footer */}
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mt-4">
            <div className="d-flex gap-4 text-muted">
              <div>
                <i className="fas fa-paperclip me-2"></i>
                assignment_1.pdf
              </div>
              <div>
                <i className="fas fa-calendar-alt me-2"></i>
                Assigned: 1 Oct 2023
              </div>
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary px-3">
                <i className="fas fa-download me-2"></i>
                Download
              </button>
              <button className="btn btn-primary px-3">
                <i className="fas fa-edit me-2"></i>
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 - Completed */}
      <div className="card border-0 mb-4 shadow-sm rounded-4 cardAnimation">
        <div className="card-body p-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-start">
            <h4 className="fw-bold mb-2">OS Scheduling Algorithms</h4>

            <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
              Completed
            </span>
          </div>

          {/* Tags */}
          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="bagde rounded-pill bg-primary-subtle text-sm-center px-3 py-1 text-primary">
              Operating Systems
            </span>
            <span className="bagde rounded-pill bg-secondary-subtle text-sm-center px-3 py-1 text-dark">
              Semester 5
            </span>
            <span className="bagde rounded-pill bg-success-subtle text-sm-center px-3 py-1 text-success">
              Due: 10 Oct 2023
            </span>
          </div>

          {/* Description */}
          <p className="text-muted">
            Implement and compare different CPU scheduling algorithms: FCFS,
            SJF, Priority, Round Robin. Submit code with outputs and analysis.
          </p>

          {/* Footer */}
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mt-4">
            <div className="d-flex gap-4 text-muted">
              <div>
                <i className="fas fa-paperclip me-2"></i>
                os_assignment.zip
              </div>
              <div>
                <i className="fas fa-calendar-alt me-2"></i>
                Submitted: 8 Oct 2023
              </div>
            </div>

            <button className="btn btn-outline-secondary px-3">
              <i className="fas fa-eye me-2"></i>
              View Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignmentCard;
