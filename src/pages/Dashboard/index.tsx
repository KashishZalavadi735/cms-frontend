import AdminDashboard from "@/components/Admin/AdminDashboard";
// import SuperAdminDashboard from "@/components/SuperAdmin/SuperAdminDashboard";

function Dashboard() {
  return (
    <div className="mt-3">
      {/* <SuperAdminDashboard /> */}
      <AdminDashboard />
    </div>
  )
}

export default Dashboard;