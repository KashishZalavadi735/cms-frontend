"use client";

import { RecentAssignment } from "@/types/type";

function RecentAssignments({
  assignments = [],
  loading,
}: {
  assignments?: RecentAssignment[];
  loading: boolean;
}) {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4 cardAnimation">
      <div className="card-body p-4">
        <h5 className="fw-semibold mb-4">Recent Assignments</h5>

        {loading ? (
          <p className="text-muted">Loading...</p>
        ) : assignments.length === 0 ? (
          <p className="text-muted">No assignments added yet</p>
        ) : (
          assignments.map((a) => (
            <div
              key={a.id}
              className="border border-primary rounded-4 p-3 mb-3 position-relative"
              style={{ borderLeft: "5px solid #2563eb !important" }}
            >
              <h6 className="fw-semibold mb-1">{a.title}</h6>
              <p className="text-muted small mb-2">
                {a.subject.name} – {a.semester.enumValue}
              </p>

              <div className="d-flex justify-content-between align-items-center">
                <span className="small text-muted">
                  Due: {new Date(a.dueDate).toLocaleDateString()}
                </span>
                <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                  Active
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecentAssignments;
