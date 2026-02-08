import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ROLES, RoleType } from "@/constants/roles";

// Super Admin
import Cards from "@/components/SuperAdmin/Cards";
import QuickActions from "@/components/SuperAdmin/QuickActions";
import RecentActivity from "@/components/SuperAdmin/RecentActivity";

// Admin
import AdminDashboardCards from "@/components/Admin/AdminDashboardCards";
import AdminQuickActionCards from "@/components/Admin/AdminQuickActionCards";
import AdminRecentActivity from "@/components/Admin/AdminRecentActivity";

// Professor
import ProfessorDashboardCards from "@/components/Professor/ProfessorDashboardCards";

// Student
import StudentDashboardCards from "@/components/Student/StudentDashboardCards";

function Dashboard() {
  const router = useRouter();

  // Role state
  const [role, setRole] = useState<RoleType | null>(null);

  // Fetch role
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role") as RoleType | null;

    if (!token || !storedRole) {
      router.push("/Login");
      return;
    }

    setRole(storedRole);
  }, []);

  if (!role) return null;

  return (
    <div className="mx-4 py-4">
      {/* Super Admin Dashboard */}
      {role === ROLES.SUPER_ADMIN && (
        <>
          <div>
            <h3 className="fw-bold fs-3 mb-0">System Overview</h3>
            <p className="fs-6 text-muted">
              Welcome to the College Management System dashboard
            </p>
          </div>

          <div className="container-fluid py-3">
            <Cards />
          </div>

          <div>
            <h4 className="fw-bold mb-0">Quick Actions</h4>
          </div>

          <div className="container-fluid py-3">
            <QuickActions />
          </div>

          <div className="container-fluid py-3">
            <RecentActivity />
          </div>
        </>
      )}

      {/* Admin Dashboard */}
      {role === ROLES.ADMIN && (
        <>
          <div>
            <h3 className="fw-bold fs-3 mb-0">System Overview</h3>
            <p className="fs-6 text-muted">
              Welcome to the College Management System dashboard
            </p>
          </div>

          <div className="container-fluid py-3">
            <AdminDashboardCards />
          </div>

          <div>
            <h4 className="fw-bold mb-0">Quick Actions</h4>
          </div>

          <div className="container-fluid py-3">
            <AdminQuickActionCards />
          </div>

          <div className="container-fluid py-3">
            <AdminRecentActivity />
          </div>
        </>
      )}

      {/* Professor Dashboard */}
      {role === ROLES.PROFESSOR && (
        <>
          <div>
            <h3 className="fw-bold fs-3 mb-0">System Overview</h3>
            <p className="fs-6 text-muted">
              Welcome to the College Management System dashboard
            </p>
          </div>

          <div className="container-fluid py-3">
            <ProfessorDashboardCards />
          </div>
        </>
      )}

      {/* Students Dashboard */}
      {role === ROLES.STUDENT && (
        <>
          <div>
            <h3 className="fw-bold fs-3 mb-0">System Overview</h3>
            <p className="fs-6 text-muted">
              Welcome to the College Management System dashboard
            </p>
          </div>

          <div className="container-fluid py-3">
            <StudentDashboardCards />
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
