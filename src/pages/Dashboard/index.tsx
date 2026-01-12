import AdminDashboardCards from "@/components/Admin/AdminDashboardCards";
import AdminQuickActionCards from "@/components/Admin/AdminQuickActionCards";
import AdminRecentActivity from "@/components/Admin/AdminRecentActivity";
import ProfessorDashboardCards from "@/components/Professor/ProfessorDashboardCards";
import StudentDashboardCards from "@/components/Student/StudentDashboardCards";
import Cards from "@/components/SuperAdmin/Cards";
import QuickActions from "@/components/SuperAdmin/QuickActions";
import RecentActivity from "@/components/SuperAdmin/RecentActivity";

function Dashboard() {
  return (
    <div className="mx-4 py-4">
      {/* Super Admin Dashboard */}
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

      {/* Admin Dashboard */}
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

      {/* Professor Dashboard */}
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

      {/* Students Dashboard */}
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
    </div>
  );
}

export default Dashboard;
