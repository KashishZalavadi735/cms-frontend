"use client";

import { useEffect, useState } from "react";
import AssignmentCard from "@/components/Student/AssignmentCard";
import AssignmentFilterTab from "@/components/Student/AssignmentFilterTab";
import AssignmentStatsCard from "../../../components/Student/AssignmentStatsCard";
import UpcomingAssignmentCard from "@/components/Student/UpcomingAssignmentCard";
import { getAllAssignment } from "@/services/assignmentService";

function MyAssignment() {
  // Assignment state
  const [assignments, setAssignments] = useState<any[]>([]);

  // Active state
  const [active, setActive] = useState("All");

  // Fetch assignments
  useEffect(() => {
    const fetchAssignments = async () => {
      const data = await getAllAssignment();
      console.log("Assignments data: ", data);      
      setAssignments(data);
    };

    fetchAssignments();
  }, []);

  // Filter assignment based on status
  const filteredAssignments = assignments.filter((a) =>
    active === "All" ? true : a.status === active,
  );

  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">My Assignments</h3>
        <p className="fs-6 text-muted">View and manage your assignments</p>
      </div>

      <div className="container-fluid py-3">
        <div className="row g-4">
          <AssignmentFilterTab active={active} setActive={setActive} />

          {/* Left */}
          <div className="col-lg-8 col-12">
            <AssignmentCard assignments={filteredAssignments} />
          </div>

          {/* Right */}
          <div className="col-lg-4 col-12">
            <AssignmentStatsCard />
            <UpcomingAssignmentCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAssignment;
