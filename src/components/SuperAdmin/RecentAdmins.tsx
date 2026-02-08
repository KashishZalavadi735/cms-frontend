"use client";

interface RecentAdmin {
  id: string;
  name: string;
  branch: string;
}

function RecentAdmins({
  admins,
  loading,
}: {
  admins: RecentAdmin[];
  loading: boolean;
}) {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4 cardAnimation">
      <div className="card-body p-4">
        <h5 className="fw-semibold mb-3">Recently Added Admins</h5>

        {loading ? (
          <p className="text-muted">Loading...</p>
        ) : admins.length === 0 ? (
          <p className="text-muted">No admins added yet</p>
        ) : (
          admins.map((admin) => (
            <div key={admin.id} className="d-flex align-items-center p-2 mb-3 border rounded-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#e0edff",
                }}
              >
                <i className="fas fa-user-tie text-primary"></i>
              </div>

              <div>
                <div className="fw-semibold">{admin.name}</div>
                <small className="text-muted">{admin.branch}</small>
              </div>
            </div>
          ))
        )}

        {/* <div className="d-flex align-items-center p-2 mb-3 border rounded-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#e0edff",
            }}
          >
            <i className="fas fa-user-tie text-primary"></i>
          </div>

          <div>
            <div className="fw-semibold">Dr. Suresh Patel</div>
            <small className="text-muted">Mechanical Engineering</small>
          </div>
        </div>

        <div className="d-flex align-items-center p-2 mb-3 border rounded-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#e0edff",
            }}
          >
            <i className="fas fa-user-tie text-primary"></i>
          </div>

          <div>
            <div className="fw-semibold">Prof. Meena Sharma</div>
            <small className="text-muted">Electrical Engineering</small>
          </div>
        </div>

        <div className="d-flex align-items-center p-2 mb-3 border rounded-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#e0edff",
            }}
          >
            <i className="fas fa-user-tie text-primary"></i>
          </div>

          <div>
            <div className="fw-semibold">Dr. Anil Gupta</div>
            <small className="text-muted">Civil Engineering</small>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default RecentAdmins;
