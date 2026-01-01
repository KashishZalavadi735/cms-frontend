"use client";

import UpdateAdminForm from "@/components/SuperAdmin/UpdateAdminForm";

function UpdateAdmin() {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Update Admin</h4>
          <small>Update Admin of your department in your college</small>
        </div>
      </div>

      <UpdateAdminForm />
    </div>
  );
}

export default UpdateAdmin;