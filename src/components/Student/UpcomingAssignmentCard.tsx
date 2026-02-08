
function UpcomingAssignmentCard() {
  return (
    <div className="card border-0 rounded-4 text-white cardAnimation" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
        <div className="card-body p-4">
            <h5 className='mb-3'>Upcoming Deadlines</h5>

            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <div className="fw-semibold">DBMS Normalization</div>
                    <small className='opacity-75'>Due in 3 days</small>
                </div>

                <span className='bagde rounded-pill px-3 py-2' style={{ backgroundColor: "rgba(255,255,255,0.25)" }}>High</span>
            </div>

            <hr className="border-light opacity-25" />

            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <div className="fw-semibold">Network Protocols</div>
                    <small className='opacity-75'>Due in 7 days</small>
                </div>

                <span className='bagde rounded-pill px-3 py-2' style={{ backgroundColor: "rgba(255,255,255,0.25)" }}>Medium</span>
            </div>

            <hr className="border-light opacity-25" />
            
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <div className="fw-semibold">Web Development</div>
                    <small className='opacity-75'>Due in 14 days</small>
                </div>

                <span className='bagde rounded-pill px-3 py-2' style={{ backgroundColor: "rgba(255,255,255,0.25)" }}>Low</span>
            </div>

            
        </div>
    </div>
  )
}

export default UpcomingAssignmentCard;