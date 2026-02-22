"use client";

function TotalProfessorCard({
  totalProfessor,
  branchName,
  totalSubjects,
  loading,
}: {
  totalProfessor: number;
  branchName: string;
  totalSubjects: number;
  loading: boolean;
}) {
  return (
    <div
      className="card border-0 rounded-4 text-white cardAnimation"
      style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
    >
      <div className="card-body p-4">
        <h5>Professors Summary</h5>
        {loading ? (
          <h1 className="fw-bold">--</h1>
        ) : (
          <h1 className="fw-bold">{totalProfessor}</h1>
        )}

        <p className="mb-3">In {branchName} Department</p>

        <hr className="border-light" />

        <small>
          <i className="fas fa-book me-2"></i>
          {totalSubjects} subjects assigned
        </small>
      </div>
    </div>
  );
}

export default TotalProfessorCard;
