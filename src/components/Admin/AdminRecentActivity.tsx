"use client";

import Styles from "@/styles/RecentActivity.module.css"

function AdminRecentActivity() {
  return (
    <div className={`card p-3`}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center py-2 px-3 mb-3">
            <h5 className="fw-bold mb-0">Recent Activity</h5>
            <a href="" className="text-primary fw-medium text-decoration-none">
                View All
            </a>
        </div>

        {/* Activity Item */}
        <div className={`d-flex gap-3 p-2 mb-4 ${Styles.item}`}>
            <div className={`d-flex align-items-center justify-content-center ${Styles.itemIcon} ${Styles.greenIcon}`}>
                <i className="fas fa-user-plus"></i>
            </div>

            <div className="flex-grow-1">
                <h6 className="fw-semibold mb-1">New Admin created</h6>
                <p className="text-muted mb-1">Dr. Rajesh Kumar added as HOD of Computer Department</p>
                <small className="text-muted">2 hours ago</small>
            </div>

            <span className={`badge text-success ${Styles.badgeGreen}`}>ADMIN</span>
        </div>

        {/* Activity Item */}
        <div className={`d-flex gap-3 p-3 mb-4 ${Styles.item}`}>
            <div className={`d-flex align-items-center justify-content-center ${Styles.itemIcon} ${Styles.purpleIcon}`}>
                <i className="fas fa-tasks"></i>
            </div>

            <div className="flex-grow-1">
                <h6 className="fw-semibold mb-1">New Assignment assigned</h6>
                <p className="text-muted mb-1">"Database Normalization" assigned to Computer Engineering Sem 4</p>
                <small className="text-muted">5 hours ago</small>
            </div>

            <span className={`badge ${Styles.badgePurple}`}>PROFESSOR</span>
        </div>

        {/* Activity Item */}
        <div className={`d-flex gap-3 p-3 mb-4 ${Styles.item}`}>
            <div className={`d-flex align-items-center justify-content-center ${Styles.itemIcon} ${Styles.orangeIcon}`}>
                <i className="fas fa-check"></i>
            </div>

            <div className="flex-grow-1">
                <h6 className="fw-semibold mb-1">Assignment submitted</h6>
                <p className="text-muted mb-1">Rahul Sharma submitted "Data Structures Assignment 3"</p>
                <small className="text-muted">1 day ago</small>
            </div>

            <span className={`badge ${Styles.badgeOrange}`}>STUDENT</span>
        </div>
    </div>
  )
}

export default AdminRecentActivity