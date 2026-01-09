"use client";

import AssignmentFilter from "@/components/Student/AssignmentFilter";
import AssignmentTable from "@/components/Student/AssignmentTable";

function AssignmentStatus() {
  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">Assignment Status</h3>
        <p className="fs-6 text-muted">
          Track and update your assignment progress
        </p>
      </div>

    
      <div className="container-fluid py-3">
        <AssignmentFilter/> 
      </div>

      <div className="container-fluid py-3">
        <AssignmentTable />
      </div>
    </div>
  )
}

export default AssignmentStatus;