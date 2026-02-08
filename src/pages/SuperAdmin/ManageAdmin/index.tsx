"use client";

import { useState } from "react";
import AdminList from "@/components/SuperAdmin/AdminList";

function ManageAdmin() {
  const [search, setSearch] = useState("");
  
  return (
    <div className="mx-4 py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Header */}
        <div>
          <h3 className="fw-bold fs-3 mb-0">Manage Admin (HOD)</h3>
          <p className="fs-6 text-muted">
            Manage Head of Department to the system
          </p>
        </div>

        {/* Search bar */}
        <div>
          <input type="text" className="form-control w-100 rounded-3" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="container-fluid py-3">
        <AdminList search={search} />
      </div>
    </div>
  );
}

export default ManageAdmin;
