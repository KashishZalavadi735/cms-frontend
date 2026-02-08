"use client";

import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getAllAssignment,
  updateAssignmentStatus,
} from "@/services/assignmentService";
import { getEnumByType } from "@/services/enumService";
import { EnumOption } from "@/types/type";

function AssignmentStatusPage() {
  const router = useRouter();
  const { id } = useParams();

  // Get assignment for update
  const assignmentId = Number(id);

  // Assignment state
  const [assignment, setAssignment] = useState<any>(null);

  // Status list state
  const [statusList, setStatusList] = useState<EnumOption[]>([]);

  // Status state
  const [status, setStatus] = useState<string>("");

  // Fetch assignment by ID
  useEffect(() => {
    if (!assignmentId) return;

    const fetchAssignment = async () => {
      const allAssignments = await getAllAssignment();
      const found = allAssignments.find((a: any) => a.id === assignmentId);

      setAssignment(found);
      setStatus(found?.status?.enumValue ?? "Pending");
    };

    fetchAssignment();
  }, [assignmentId]);

  // Fetch statuses dynamically
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data = await getEnumByType("ASSIGNMENT_STATUS");
        setStatusList(data);
      } catch (error: any) {
        console.error("Failed to load status", error);
      }
    };

    fetchStatus();
  }, []);

  // Handle Status update
  const handleStatusUpdate = async () => {
    if (!assignmentId || !status) return;

    const selectedStatus = statusList.find((s) => s.enumValue === status);

    if (!selectedStatus) {
      toast.error("Invalid status selected");
      return;
    }

    const response = await updateAssignmentStatus(
      assignmentId,
      selectedStatus.id,
    );
    console.log("Status updated: ", response);
    
    toast.success("Status Updated Successfully!");
    router.push(`/Student/MyAssignment?updatedId=${assignmentId}&status=${status}`);
  };

  if (!assignment)
    return <p className="text-muted p-4">Loading assignment...</p>;

  return (
    <div className="mx-4 py-4">
      <h3 className="fw-bold fs-3 mb-0">Update Assignment Status</h3>
      <p className="fs-6 text-muted">{assignment.title}</p>

      <div className="container-fluid py-3">
        <div className="card border-0 p-4 shadow-sm rounded-4 cardAnimation">
          <p>
            <strong>Subject:</strong> {assignment.subject?.name}
          </p>

          <p>
            <strong>Due Date:</strong>{" "}
            {new Date(assignment.dueDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>

          <p>
            <strong>Description:</strong> {assignment.description}
          </p>

          <label className="form-label mt-3">Status</label>

          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statusList.map((s) => (
              <option key={s.id} value={s.enumValue}>
                {s.enumValue}
              </option>
            ))}
          </select>

          <button className="btn btn-primary mt-4" onClick={handleStatusUpdate}>
            Update Status
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentStatusPage;
