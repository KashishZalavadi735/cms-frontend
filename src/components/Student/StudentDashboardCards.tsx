"use client";

import { getDashboardStats } from "@/services/studentService";
import Styles from "@/styles/Cards.module.css";
import { useEffect, useState } from "react";

function StudentDashboardCards() {
  // Card stats
  const [stats, setStats] = useState({
    professors: 0,
    admin: 0,
    activeAssignments: 0,
    completedAssignments: 0,
    dueThisWeek: 0,
    department: "",
    usersGrowth: 0,
    completedGrowth: 0,
  });

  // Fetch card stats
  useEffect(() => {
    const storedStats = sessionStorage.getItem("dashboardStats");

    // If data already exists
    if (storedStats) {
      setStats(JSON.parse(storedStats));
      return;
    }

    const fetchStats = async () => {
      try {
        const response = await getDashboardStats();
        console.log("Dashboard cards: ", response);
        setStats(response);
      } catch (error) {
        console.error("Dashboard stats error", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="row g-3">
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className={`card shadow-lg border-0 rounded-3 text-white p-3 ${Styles.cardAnimation} ${Styles.blue}`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className="opacity-75">Head of Department</small>
              <h2 className="fw-bold mt-2">{stats.admin}</h2>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center ${Styles.iconCircle}`}
            >
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
          </div>

          <hr className="m-3" />

          <small>
            <i
              className="fas fa-arrow-up me-1"
              style={{ color: "#22c55e" }}
            ></i>
            {stats.usersGrowth}% increase from last month
          </small>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div
          className={`card shadow-lg border-0 rounded-3 text-white p-3 ${Styles.cardAnimation} ${Styles.green}`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className="opacity-75">Active Assignments</small>
              <h2 className="fw-bold mt-2">{stats.activeAssignments}</h2>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center ${Styles.iconCircle}`}
            >
              <i className="fas fa-tasks"></i>
            </div>
          </div>

          <hr className="m-3" />

          <small>
            <i className="fas fa-clock text-warning me-1"></i>
            {stats.dueThisWeek} due this week
          </small>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div
          className={`card shadow-lg border-0 rounded-3 text-white p-3 ${Styles.cardAnimation} ${Styles.purple}`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className="opacity-75">Professors</small>
              <h2 className="fw-bold mt-2">{stats.professors}</h2>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center ${Styles.iconCircle}`}
            >
              <i className="fas fa-users"></i>
            </div>
          </div>

          <hr className="m-3" />

          <small>
            <i
              className="fas fa-check-circle me-1"
              style={{ color: "#22c55e" }}
            ></i>
            {stats.department} department covered
          </small>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div
          className={`card shadow-lg border-0 rounded-3 text-white p-3 ${Styles.cardAnimation} ${Styles.orange}`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className="opacity-75">Completed Assignments</small>
              <h2 className="fw-bold mt-2">{stats.completedAssignments}</h2>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center ${Styles.iconCircle}`}
            >
              <i className="fas fa-users"></i>
            </div>
          </div>

          <hr className="m-3" />

          <small>
            <i
              className="fas fa-arrow-up me-1"
              style={{ color: "#22c55e" }}
            ></i>
            {stats.completedGrowth}% increase from last month
          </small>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboardCards;
