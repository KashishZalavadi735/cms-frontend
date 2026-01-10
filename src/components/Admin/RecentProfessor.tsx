"use client";

function RecentProfessor() {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4 cardAnimation">
        <div className="card-body p-4">
            <h5 className="fw-semibold mb-3">Professors in Your Branch</h5>

            <div className="d-flex align-items-center p-2 mb-3 border rounded-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: "40px", height: "40px", backgroundColor: "#dcfce7" }}>
                    <i className="fas fa-chalkboard-teacher text-success"></i>
                </div>

                <div>
                    <div className="fw-semibold">Dr. Ravi Verma</div>
                    <small className="text-muted">Computer Networks, OS</small>
                </div>
            </div>

            <div className="d-flex align-items-center p-2 mb-3 border rounded-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: "40px", height: "40px", backgroundColor: "#dcfce7" }}>
                    <i className="fas fa-chalkboard-teacher text-success"></i>
                </div>

                <div>
                    <div className="fw-semibold">Prof. Sunita Reddy</div>
                    <small className="text-muted">DBMS, Data Structures</small>
                </div>
            </div>

            <div className="d-flex align-items-center p-2 mb-3 border rounded-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: "40px", height: "40px", backgroundColor: "#dcfce7" }}>
                    <i className="fas fa-chalkboard-teacher text-success"></i>
                </div>

                <div>
                    <div className="fw-semibold">Dr. Amit Kumar</div>
                    <small className="text-muted">AI, Machine Learning</small>
                </div>
            </div>

        </div>
    </div>
  )
}

export default RecentProfessor;