"use client";

import { getDashboardStats } from "@/services/superAdminService";
import { useEffect, useState } from "react";

function SysInfoCard() {
  // Stats state
  const [stats, setStats] = useState<any>(null);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Fetch stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        console.log("Stats data: ", data);
        setStats(data);
      } catch (error) {
        console.error("Failed to load system info", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="card p-4">Loading system info...</div>;
  }

  if (!stats) return null;

  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4 cardAnimation">
      <div className="card-body p-4">
        <h5 className="fw-semibold mb-3">System Information</h5>
        <div>
          <div className="d-flex justify-content-between">
            <p className="text-muted">Total Users</p>
            <p className="fw-medium">{stats.totalUsers}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p className="text-muted">Active Assignments</p>
            <p className="fw-medium">{stats.activeAssignments}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p className="text-muted">Professors</p>
            <p className="fw-medium">{stats.professors}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p className="text-muted">Departments</p>
            <p className="fw-medium">{stats.departments}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p className="text-muted">System Version</p>
            <p className="fw-medium">v2.0.1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SysInfoCard;
