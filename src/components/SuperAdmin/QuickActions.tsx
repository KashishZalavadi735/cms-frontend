"use client";

import Styles from "@/styles/QuickActions.module.css";
import { useRouter } from "next/router";

function QuickActions() {
  const router = useRouter();
  return (
    <div className="row g-3">
      {/* Create Admin */}
      <div className="col-12 col-md-6 col-lg-4">
        <div
          className={`card shadow-lg border-1 rounded-3 p-3 cardAnimation ${Styles.cardBlue}`}
        >
          <div className="d-flex align-items-start gap-3">
            <div
              className={`d-flex align-items-center justify-content-center ${Styles.icon} ${Styles.blueBg}`}
            >
              <i className="fas fa-user-plus"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Create Admin</h5>
              <p className="text-muted mb-3">Add new HOD to department</p>
            </div>
          </div>
          <div>
            <button className={`btn text-primary w-100 fw-medium ${Styles.blueBtn}`} onClick={() => router.push("/SuperAdmin/CreateAdmin")}>
              Go to Create Admin
            </button>
          </div>
        </div>
      </div>

      {/* Assign Assignment */}
      <div className="col-12 col-md-6 col-lg-4">
        <div
          className={`card shadow-lg border-1 rounded-3 p-3 cardAnimation ${Styles.cardGreen}`}
        >
          <div className="d-flex align-items-start gap-3">
            <div
              className={`d-flex align-items-center justify-content-center ${Styles.icon} ${Styles.greenBg}`}
            >
              <i className="fas fa-tasks"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Manage Admin</h5>
              <p className="text-muted mb-3">Manage new HOD to department</p>
            </div>
          </div>
          <div>
            <button className={`btn text-success w-100 fw-medium ${Styles.greenBtn}`} onClick={() => router.push("/SuperAdmin/ManageAdmin")}>
              Go to Assign Assignment
            </button>
          </div>
        </div>
      </div>

      {/* View Analytics */}
      <div className="col-12 col-md-6 col-lg-4">
        <div
          className={`card shadow-lg border-1 rounded-3 p-3 cardAnimation ${Styles.cardPurple}`}
        >
          <div className="d-flex align-items-start gap-3">
            <div
              className={`d-flex align-items-center justify-content-center ${Styles.icon} ${Styles.purpleBg}`}
            >
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">View Analytics</h5>
              <p className="text-muted mb-3">See system performance metrics</p>
            </div>
          </div>
          <div>
            <button className={`btn w-100 fw-medium ${Styles.purpleBtn}`} style={{ color: "#7c3aed" }}>
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickActions;
