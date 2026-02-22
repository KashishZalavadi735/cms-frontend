import { useEffect, useState } from "react";
import AddAdminForm from "@/components/SuperAdmin/AddAdminForm";
import RecentAdmins from "@/components/SuperAdmin/RecentAdmins";
import TotalAdminsCard from "@/components/SuperAdmin/TotalAdminsCard";
import { getAdminSummary } from "@/services/superAdminService";

function CreateAdmin() {
  // Loading state
  const [loading, setLoading] = useState(true);

  // Recent admin state
  const [recentAdmins, setRecentAdmins] = useState([]);

  // Total admin state
  const [totalAdmins, setTotalAdmins] = useState(0);

  // Total department state
  const [totalDepartments, setTotalDepartments] = useState(0);

  // Fetch admin summary
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const data = await getAdminSummary();
        console.log("Admin summary: ", data);
        setRecentAdmins(data.recentAdmins);
        setTotalAdmins(data.totalAdmins);
        setTotalDepartments(data.totalDepartments);
      } catch (error: any) {
        console.error("Failed to fetch admin summary", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">Create Admin (HOD)</h3>
        <p className="fs-6 text-muted">
          Add new Head of Department to the system
        </p>
      </div>

      <div className="container-fluid py-3">
        <div className="row g-4">
          {/* Left */}
          <div className="col-lg-8 col-12">
            <AddAdminForm />
          </div>

          {/* Right */}
          <div className="col-lg-4 col-12">
            <RecentAdmins admins={recentAdmins} loading={loading} />
            <TotalAdminsCard totalAdmins={totalAdmins} totalDepartments={totalDepartments} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
