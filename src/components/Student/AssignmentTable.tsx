"use client";

import { useRouter } from "next/router";
import {
  getAllAssignment,
  viewAssignmentPdf,
} from "@/services/assignmentService";
import { useEffect, useState } from "react";
import { AssignmentProps } from "@/types/type";

const ITEMS_PER_PAGE = 5;

function AssignmentTable({ search }: AssignmentProps) {
  const router = useRouter();

  // Assignment state
  const [assignments, setAssignments] = useState<any[]>([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  // Format date
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  // Status badge style
  const getStatusBadge = (status: string) =>
    status === "Completed"
      ? "bg-success-subtle text-success"
      : status === "In Process"
        ? "bg-info-subtle text-info"
        : "bg-warning-subtle text-warning";

  const handleViewPdf = async (fileUrl: string) => {
    try {
      const blob = await viewAssignmentPdf(fileUrl);
      const fileURL = window.URL.createObjectURL(blob);
      window.open(fileURL, "_blank");
    } catch (error) {
      console.error("Unable to open PDF", error);
    }
  };

  // Fetch assignments
  useEffect(() => {
    const storedAssignments = sessionStorage.getItem("studentAssignments");

    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
      setLoading(false);
      return;
    }

    const fetchAssignments = async () => {
      try {
        const response = await getAllAssignment();
        console.log("Assignments: ", response);

        setAssignments(response);

        sessionStorage.setItem("studentAssignments", JSON.stringify(response));
      } catch (err) {
        console.error("Failed to fetch assignments", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  // Filter assignments based on search
  const filteredAssignments = assignments.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subject.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredAssignments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAssignments = filteredAssignments.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  if (loading) {
    return <p className="p-4 text-muted">Loading assignments...</p>;
  }

  return (
    <>
      <div className="card border-0 shadow-sm rounded-4 table-responsive cardAnimation">
        <div className="card-body p-4">
          <table className="table align-middle">
            <thead>
              <tr className="text-uppercase">
                <th>Assignment</th>
                <th>Subject</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Attachment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentAssignments.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center text-muted">
                    No assignments found
                  </td>
                </tr>
              )}

              {currentAssignments.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="fw-semibold">{item.title}</td>
                    <td>{item.subject.name}</td>
                    <td>{formatDate(item.dueDate)}</td>
                    <td>
                      <span className={`badge ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>
                      {item.attachment ? (
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleViewPdf(item.attachment)}
                        >
                          View PDF
                        </button>
                      ) : (
                        <span className="text-muted">No file</span>
                      )}
                    </td>
                    <td>
                      {item.status === "Completed" ? (
                        <button className="btn btn-success btn-sm" disabled>
                          Completed
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() =>
                            router.push(`/Student/AssignmentStatus/${item.id}`)
                          }
                        >
                          Update Status
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-outline-secondary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="btn btn-outline-secondary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignmentTable;
