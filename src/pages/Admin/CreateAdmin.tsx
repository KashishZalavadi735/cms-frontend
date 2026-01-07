import AddAdminForm from "@/components/SuperAdmin/AddAdminForm";
import RecentAdmins from "@/components/SuperAdmin/RecentAdmins";
import TotalAdminsCard from "@/components/SuperAdmin/TotalAdminsCard";

function CreateAdmin() {
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
                <RecentAdmins />
                <TotalAdminsCard />
            </div>

        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
