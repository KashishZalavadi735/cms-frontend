"use client";

import AdminList from "@/components/SuperAdmin/AdminList";
import { useRouter } from "next/router";


function ShowAdmin() {
  const router = useRouter();

  // Handle add admin
  const handleAddAdmin = () => {
    router.push("/Admin/AddAdmin")
  };
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Admin Management</h4>
          <small>Manage all Admin(HOD) in your college</small>
        </div>
      </div>

      <AdminList />
    </div>
  );
}

export default ShowAdmin;
