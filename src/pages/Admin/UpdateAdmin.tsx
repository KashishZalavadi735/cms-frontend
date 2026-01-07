import UpdateAdminForm from '@/components/SuperAdmin/UpdateAdminForm';
import React from 'react'

function UpdateAdmin() {
  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">Update Admin (HOD)</h3>
        <p className="fs-6 text-muted">
          Update details of Head of Department to the system
        </p>
      </div>

      <div className="container-fluid py-3">
        <UpdateAdminForm />
      </div>
    </div>
  )
}

export default UpdateAdmin;