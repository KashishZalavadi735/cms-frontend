"use client";

import { useState } from "react";
import AssignmentTable from "@/components/Student/AssignmentTable";

function AssignmentStatus() {
  // Search states
  const [search, setSearch] = useState("");

  return (
    <div className="mx-4 py-4">
      <div className="d-flex justify-content-between align-items-center">
        {/* Header */}
        <div>
          <h3 className="fw-bold fs-3 mb-0">Assignment Status</h3>
          <p className="fs-6 text-muted">
            Track and update your assignment progress
          </p>
        </div>

        {/* Search bar */}
        <div>
          <input
            type="text"
            className="form-control w-100 rounded-3"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="container-fluid py-3">
        <AssignmentTable search={search} />
      </div>
    </div>
  );
}

export default AssignmentStatus;
