"use client";
import Styles from "@/styles/Cards.module.css";

function AdminDashboardCards() {
  return (
    <div className="row g-3">
        {/* Total users */}
        <div className="col-12 col-md-6 col-lg-3">
            <div className={`card shadow-lg border-0 rounded-3 text-white p-3 ${Styles.cardAnimation} ${Styles.blue}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <small className="opacity-75">Total Studnts</small>
                        <h2 className="fw-bold mt-2">1,254</h2>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center ${Styles.iconCircle}`}>
                        <i className="fas fa-users"></i>
                    </div>
                </div>
                
                <hr className="m-3" />

                <small>
                    <i className="fas fa-arrow-up me-1" style={{ color:"#22c55e" }}></i>
                    12% increase from last month
                </small>

            </div>
        </div>

        {/* Active assignments */}
        <div className="col-12 col-md-6 col-lg-3">
            <div className={`card shadow-lg border-0 rounded-3 text-white p-3 ${Styles.cardAnimation} ${Styles.green}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <small className="opacity-75">Active Assignments</small>
                        <h2 className="fw-bold mt-2">48</h2>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center ${Styles.iconCircle}`}>
                        <i className="fas fa-tasks"></i>
                    </div>
                </div>
                
                <hr className="m-3" />

                <small>
                    <i className="fas fa-clock text-warning me-1"></i>
                    5 due this week
                </small>

            </div>
        </div>
        
        {/* Professors */}
        <div className="col-12 col-md-6 col-lg-3">
            <div className={`card shadow-lg border-0 rounded-3 text-white p-3 ${Styles.cardAnimation} ${Styles.purple}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <small className="opacity-75">Professors</small>
                        <h2 className="fw-bold mt-2">86</h2>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center ${Styles.iconCircle}`}>
                        <i className="fas fa-chalkboard-teacher"></i>
                    </div>
                </div>
                
                <hr className="m-3" />

                <small>
                    <i className="fas fa-check-circle me-1" style={{ color:"#22c55e" }}></i>
                    All departments covered
                </small>

            </div>
        </div>

        {/* Completed Assignments */}
        <div className="col-12 col-md-6 col-lg-3">
            <div className={`card shadow-lg border-0 rounded-3 text-white p-3 ${Styles.cardAnimation} ${Styles.orange}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <small className="opacity-75">Completed Assignments</small>
                        <h2 className="fw-bold mt-2">892</h2>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center ${Styles.iconCircle}`}>
                        <i className="fas fa-users"></i>
                    </div>
                </div>
                
                <hr className="m-3" />

                <small>
                    <i className="fas fa-arrow-up me-1" style={{ color:"#22c55e" }}></i>
                    23% increase from last month
                </small>

            </div>
        </div>

    </div>
  )
}

export default AdminDashboardCards;