function AssignmentsSummaryCard({
  totalAssignment,
  activeAssignment,
  dtwAssignment,
  loading
}: {
  totalAssignment: number;
  activeAssignment: number;
  dtwAssignment: number;
  loading: boolean
}) {
  return (
    <div
      className="card border-0 rounded-4 text-white cardAnimation"
      style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}
    >
      <div className="card-body p-4">
        <h5>Assignments Summary</h5>
        {loading ? (
          <h1 className="fw-bold">--</h1>
        ) : (
          <h1 className="fw-bold">{totalAssignment}</h1>
        )}
        <p className="mb-3">Active assignments across all branches</p>

        <hr className="border-light" />

        <small>
          <i className="fas fa-info-circle me-2"></i>{dtwAssignment} assignments due this week
        </small>
      </div>
    </div>
  );
}

export default AssignmentsSummaryCard;
