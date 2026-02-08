"use client";

function TotalAdminsCard({
  totalAdmins,
  totalDepartments,
  loading,
}: {
  totalAdmins: number;
  totalDepartments: number;
  loading: boolean;
}) {
  return (
    <div
      className="card border-0 rounded-4 text-white cardAnimation"
      style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
    >
      <div className="card-body p-4">
        <h5>Total Admins</h5>
        {loading ? (
          <h1 className="fw-bold">--</h1>
        ) : (
          <h1 className="fw-bold">{totalAdmins}</h1>
        )}
        <p className="mb-3">Across {totalDepartments} departments</p>

        <hr className="border-light" />

        <small>
          <i className="fas fa-info-circle me-2"></i>
          Each branch can have multiple admins
        </small>
      </div>
    </div>
  );
}

export default TotalAdminsCard;
