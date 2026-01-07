"use client";

function RecentAdmins() {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4 cardAnimation">
        <div className="card-body p-4">
            <h6 className="fw-semibold mb-3">Recently Added Admins</h6>

            <div className="d-flex align-items-center p-3 mb-3 border rounded-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px", backgroundColor: "#e0edff" }}>
                    <i className="fas fa-user-tie text-primary"></i>
                </div>

                <div>
                    <div className="fw-semibold">Dr. Suresh Patel</div>
                    <small className="text-muted">Mechanical Engineering</small>
                </div>
            </div>

            <div className="d-flex align-items-center p-3 mb-3 border rounded-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px", backgroundColor: "#e0edff" }}>
                    <i className="fas fa-user-tie text-primary"></i>
                </div>

                <div>
                    <div className="fw-semibold">Prof. Meena Sharma</div>
                    <small className="text-muted">Electrical Engineering</small>
                </div>
            </div>

            <div className="d-flex align-items-center p-3 mb-3 border rounded-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px", backgroundColor: "#e0edff" }}>
                    <i className="fas fa-user-tie text-primary"></i>
                </div>

                <div>
                    <div className="fw-semibold">Dr. Anil Gupta</div>
                    <small className="text-muted">Civil Engineering</small>
                </div>
            </div>

        </div>
    </div>
  )
}

export default RecentAdmins;