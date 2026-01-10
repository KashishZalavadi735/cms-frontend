import ProfileCard from "@/components/SuperAdmin/ProfileCard";
import SysInfoCard from "@/components/SuperAdmin/SysInfoCard";
import AcSecCard from "@/components/SuperAdmin/AcSecCard";
import AdminProfileCard from "@/components/Admin/AdminProfileCard";
import AdminSysInfoCard from "@/components/Admin/AdminSysInfoCard";
import ProfessorProfileCard from "@/components/Professor/ProfessorProfileCard";
import ProfessorSysInfoCard from "@/components/Professor/ProfessorSysInfoCard";
import StudentProfileCard from "@/components/Student/StudentProfileCard";
import StudentSysInfoCard from "@/components/Student/StudentSysInfoCard";

function Profile() {
  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">My Profile</h3>
        <p className="fs-6 text-muted">
          Manage your account information and settings
        </p>
      </div>

      {/* Super Admin Profile */}
      {/* <div className="container-fluid py-3">
        <div className="row g-4">
          <div className="col-lg-8 col-12">
            <ProfileCard />
          </div>

          <div className="col-lg-4 col-12">
            <SysInfoCard />
            <AcSecCard />
          </div>
        </div>
      </div> */}

      {/* Admin Profile */}
      {/* <div className="container-fluid py-3">
        <div className="row g-4">
          <div className="col-lg-8 col-12">
            <AdminProfileCard />
          </div>

          <div className="col-lg-4 col-12">
            <AdminSysInfoCard />
            <AcSecCard />
          </div>
        </div>
      </div> */}

      {/* Professor Profile */}
      {/* <div className="container-fluid py-3">
        <div className="row g-4">
            <div className="col-lg-8 col-12">
                <ProfessorProfileCard />
            </div>

            <div className="col-lg-4 col-12">
                <ProfessorSysInfoCard />
                <AcSecCard />
            </div>
        </div>
      </div> */}

      {/* Student Profile */}
      <div className="container-fluid py-3">
        <div className="row g-4">
            <div className="col-lg-8 col-12">
                <StudentProfileCard />
            </div>

            <div className="col-lg-4 col-12">
                <StudentSysInfoCard />
                <AcSecCard />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
