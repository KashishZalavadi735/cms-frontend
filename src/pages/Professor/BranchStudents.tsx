"use client";

import StudentList from "@/components/Shared/StudentList";

function BranchStudents() {
  return (
    <div className="mx-4 py-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className="fw-bold fs-3 mb-0">Student Details</h3>
          <p className="fs-6 text-muted">
            Here's your branch students
          </p>
        </div>
        <div>
          <h3 className="fw-bold fs-3 mb-0">Branch : </h3>
          <p className="fs-6 text-muted">
            Computer Engineering
          </p>
          
        </div>
      </div>

      <div className="container-fluid py-3">
        <StudentList />
      </div>
    </div>
  );
}

export default BranchStudents