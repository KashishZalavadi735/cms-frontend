"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/services/adminService";
import StudentList from "@/components/Shared/StudentList";

function BranchStudents() {
  // Search states
  const [search, setSearch] = useState("");

  // Branch name states
  const [branchName, setBranchName] = useState("");

  // Fetch branch value using Profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setBranchName(response?.branch?.enumValue ?? "");
      } catch (error: any) {
        console.error("Failed to fetch branch name");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="mx-4 py-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className="fw-bold fs-3 mb-0">Student Details</h3>
          <p className="fs-6 text-muted">
            {branchName
              ? `Here’s a list of students from the ${branchName} branch`
              : `Here’s a list of students`}
          </p>
        </div>
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
        <StudentList search={search} />
      </div>
    </div>
  );
}

export default BranchStudents;
