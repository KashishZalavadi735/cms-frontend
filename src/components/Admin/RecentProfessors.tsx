"use client";

import { RecentProfessor } from "@/types/type";

function RecentProfessors({
  professors,
  loading,
}: {
  professors: RecentProfessor[];
  loading: boolean;
}) {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4 cardAnimation">
      <div className="card-body p-4">
        <h5 className="fw-semibold mb-3">Professors in Your Branch</h5>

        {loading ? (
          <p className="text-muted">Loading...</p>
        ) : professors.length === 0 ? (
          <p className="text-muted">No professors added yet</p>
        ) : (
          professors.map((prof) => (
            <div
              key={prof.id}
              className="d-flex align-items-center p-2 mb-3 border rounded-3"
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#e0edff",
                  flexShrink: 0
                }}
              >
                <i className="fas fa-chalkboard-teacher text-success"></i>
              </div>

              <div>
                <div className="fw-semibold">{prof.name}</div>
                <small className="text-muted" style={{ lineHeight: "1.4" }}>
                  {Array.isArray(prof.subjects) && prof.subjects.length > 0
                    ? prof.subjects.join(", ")
                    : "No subjects assigned"}
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecentProfessors;
