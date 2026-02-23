"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAdminById } from "@/services/superAdminService";
import { AdminListData } from "@/types/type";

function ViewAdmin() {
  const router = useRouter();
  const { id } = router.query;

  // Admin stats
  const [adminData, setAdminData] = useState<AdminListData | null>(null);

  // Loading stats
  const [loading, setLoading] = useState(true);

  // Fetch admin details
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        if (!id || Array.isArray(id)) return;
        const data = await getAdminById(id);
        console.log("Admin details: ", data);

        setAdminData(data);
      } catch (error: any) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, [id]);

  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0"> Admin (HOD) Details</h3>
        <p className="fs-6 text-muted">
          Here's is your Head of Department details
        </p>
      </div>

      <div className="container-fluid py-3">
        <div className="card border-0 shadow-sm rounded-4 cardAnimation">
          <div className="card-body p-4">
            {loading ? (
              <h5>Loading details...</h5>
            ) : (
              <>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Admin ID</p>
                      <h6 className="fw-semibold mb-0">
                        {adminData?.code}
                      </h6>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Full Name</p>
                      <h6 className="fw-semibold mb-0">
                        {adminData?.name}
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Email</p>
                      <h6 className="fw-semibold mb-0">
                        {adminData?.email}
                      </h6>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Contact No</p>
                      <h6 className="fw-semibold mb-0">
                        {adminData?.contactNumber}
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Branch</p>
                      <h6 className="fw-semibold mb-0">
                        {adminData?.branch?.enumValue}
                      </h6>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Status</p>
                      <h6
                        className={`fw-semibold mb-0 ${adminData?.status?.enumValue === "Active" ? "text-success" : "text-danger"}`}
                      >
                        {adminData?.status?.enumValue ?? "-"}
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-end">
                  <button
                    className="btn btn-outline-secondary px-4 py-2 rounded-3"
                    onClick={() => router.back()}
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAdmin;
