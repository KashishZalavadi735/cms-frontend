"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/services/adminService";
import ProfessorList from "@/components/Admin/ProfessorList";

function ManageProfessor() {
  // Search states
  const [search, setSearch] = useState("");

  // Branch name states
  const [branchName, setBranchName] = useState("");

  // Fetch branch value using profile data
  useEffect(() => {
    const storedProfile = sessionStorage.getItem("profileData");

    if (storedProfile) {
      const data = JSON.parse(storedProfile);
      setBranchName(data?.branch?.enumValue ?? "");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await getProfile();

        setBranchName(response?.branch?.enumValue ?? "");

        sessionStorage.setItem("profileData", JSON.stringify(response));
      } catch (error: any) {
        console.error("Failed to fetch branch name");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="mx-4 py-4">
      <div className="d-flex justify-content-between align-items-center">
        {/* Header */}
        <div>
          <h3 className="fw-bold fs-3 mb-0">Manage Professors</h3>
          <p className="fs-6 text-muted">
            {branchName
              ? `Manage the Professors for the ${branchName} branch in the system`
              : `Manage Professors to the system`}
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
        <ProfessorList search={search} />
      </div>
    </div>
  );
}

export default ManageProfessor;
