
function AssignmentStatsCard() {
  return (
    <div className='card border-0 shadow-sm rounded-4 mb-4 cardAnimation'>
        <div className="card-body p-4">
            <h5 className="fw-semibold mb-4">Assignment Stats</h5>

            {/* Total Assignments */}
            <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                    <span className='fw-medium'>Total Assignments</span>
                    <span className='fw-bold text-primary'>12</span>
                </div>
                <div className="progress rounded-pill" style={{ height: "8px" }}>
                    <div className="progress-bar bg-primary rounded-pill" style={{ width: "100%" }}></div>
                </div>
            </div>

            {/* Completed */}
            <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                    <span className='fw-medium'>Completed</span>
                    <span className='fw-bold text-success'>8</span>
                </div>
                <div className="progress rounded-pill" style={{ height: "8px" }}>
                    <div className="progress-bar bg-success rounded-pill" style={{ width: "66%" }}></div>
                </div>
            </div>

            {/* Pending */}
            <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                    <span className='fw-medium'>Pending</span>
                    <span className='fw-bold text-warning'>3</span>
                </div>
                <div className="progress rounded-pill" style={{ height: "8px" }}>
                    <div className="progress-bar bg-warning rounded-pill" style={{ width: "25%" }}></div>
                </div>
            </div>
            
            {/* Overdue */}
            <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                    <span className='fw-medium'>Overdue</span>
                    <span className='fw-bold text-danger'>1</span>
                </div>
                <div className="progress rounded-pill" style={{ height: "8px" }}>
                    <div className="progress-bar bg-danger rounded-pill" style={{ width: "8%" }}></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AssignmentStatsCard;