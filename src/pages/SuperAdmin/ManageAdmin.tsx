import AdminList from "@/components/SuperAdmin/AdminList";


function ManageAdmin() {
  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">Manage Admin (HOD)</h3>
        <p className="fs-6 text-muted">
          Manage Head of Department to the system
        </p>
      </div>

      <div className="container-fluid py-3">
        <AdminList />
      </div>
    </div>
  )
}

export default ManageAdmin;