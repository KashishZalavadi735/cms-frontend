"use client";

import { useRouter } from "next/navigation";
import { AssignmentCardProps } from "@/types/type";
import axios from "axios";
// import { downloadAssignment } from "@/services/assignmentService";

function AssignmentCard({ assignments }: AssignmentCardProps) {
  const router = useRouter();

  const getStatusBadge = (status: string) =>
    status === "Completed"
      ? "bg-success-subtle text-success"
      : status === "In Process"
        ? "bg-info-subtle text-info"
        : "bg-warning-subtle text-warning";

  // Extract file name from URL
  const getFileName = (url: string) => {
    if (!url) return "";
    return url.split("/").pop()!;
  };

  // Formate date
  const formatDate = (date: string | Date | null | undefined) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Handle download
  const handleDownload = async (fileUrl: string) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(fileUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      });

      const fileName = fileUrl.split("/").pop() || "assignment";

      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement("a");

      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  if (!assignments || assignments.length === 0) {
    return <p className="text-muted">No assignments found</p>;
  }

  return (
    <>
      {assignments.map((item) => {
        return (
          <div
            key={item.id}
            className="card border-0 mb-4 shadow-sm rounded-4 cardAnimation"
          >
            <div className="card-body p-4">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-start">
                <h4 className="fw-bold mb-2">{item.title}</h4>

                <span
                  className={`badge rounded-pill px-3 py-2 ${getStatusBadge(item.status)}`}
                >
                  {item.status}
                </span>
              </div>

              {/* Tags */}
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="bagde rounded-pill bg-primary-subtle text-sm-center px-3 py-1 text-primary">
                  {item.subject.name}
                </span>
                <span className="bagde rounded-pill bg-secondary-subtle text-sm-center px-3 py-1 text-dark">
                  {item.semester.enumValue}
                </span>
                <span className="bagde rounded-pill bg-success-subtle text-sm-center px-3 py-1 text-success">
                  Due: {formatDate(item.dueDate)}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted">{item.description}</p>

              {/* Footer */}
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mt-4">
                <div className="d-flex gap-4 text-muted">
                  <div>
                    <i className="fas fa-paperclip me-2"></i>
                    {getFileName(item.attachment)}
                  </div>
                  <div>
                    <i className="fas fa-calendar-alt me-2"></i>
                    Assigned: {formatDate(item.createdAt)}
                  </div>
                </div>

                <div className="d-flex gap-2">
                  {/* Download */}
                  {item.attachment && (
                    <button
                      className="btn btn-outline-primary px-3"
                      onClick={() => handleDownload(item.attachment)}
                    >
                      <i className="fas fa-download me-2"></i>
                      Download
                    </button>
                  )}

                  {/* Update status */}
                  {!(item.status === "Completed") && (
                    <button
                      className="btn btn-primary px-3"
                      onClick={() =>
                        router.push(`/Student/AssignmentStatus/${item.id}`)
                      }
                    >
                      <i className="fas fa-edit me-2"></i>
                      Update Status
                    </button>
                  )}

                  {/* View feedback */}
                  {item.status === "Completed" && (
                    <button className="btn btn-outline-secondary px-3">
                      <i className="fas fa-eye me-2"></i>
                      View Feedback
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AssignmentCard;