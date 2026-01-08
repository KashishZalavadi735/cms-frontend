"use client";

import ProfessorList from "@/components/Admin/ProfessorList";

function ManageProfessor() {
  return (
    <div className="mx-4 py-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className="fw-bold fs-3 mb-0">Manage Admin (HOD)</h3>
          <p className="fs-6 text-muted">
            Manage Head of Department to the system
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
        <ProfessorList />
      </div>
    </div>
  );
}

export default ManageProfessor;
