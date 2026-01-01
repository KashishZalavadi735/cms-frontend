"use client";

import AddAdminForm from "@/components/SuperAdmin/AddAdminForm";

function AddAdmin() {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Add Admin</h4>
          <small>Add all Admin(HOD) in your college</small>
        </div>
      </div>

      <AddAdminForm />
    </div>
  );
}

export default AddAdmin;