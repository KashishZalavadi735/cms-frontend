import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ROLES, RoleType } from "@/constants/roles";

// Super admin
import ProfileCard from "@/components/SuperAdmin/ProfileCard";
import SysInfoCard from "@/components/SuperAdmin/SysInfoCard";
import AcSecCard from "@/components/SuperAdmin/AcSecCard";

// Admin
import AdminProfileCard from "@/components/Admin/AdminProfileCard";
import AdminSysInfoCard from "@/components/Admin/AdminSysInfoCard";

// Professor
import ProfessorProfileCard from "@/components/Professor/ProfessorProfileCard";
import ProfessorSysInfoCard from "@/components/Professor/ProfessorSysInfoCard";

// Student
import StudentProfileCard from "@/components/Student/StudentProfileCard";
import StudentSysInfoCard from "@/components/Student/StudentSysInfoCard";

function Profile() {
  const router = useRouter();

  // Role state
  const [role, setRole] = useState<RoleType | null>(null);

  // Fetch role
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role") as RoleType | null;

    if (!token || !storedRole) {
      router.push("/Login");
      return;
    }

    setRole(storedRole);
  }, []);

  if (!role) return null;

  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">My Profile</h3>
        <p className="fs-6 text-muted">
          Manage your account information and settings
        </p>
      </div>

      {/* Super Admin Profile */}
      {role === ROLES.SUPER_ADMIN && (
        <div className="container-fluid py-3">
          <div className="row g-4">
            <div className="col-lg-8 col-12">
              <ProfileCard />
            </div>

            <div className="col-lg-4 col-12">
              <SysInfoCard />
              <AcSecCard />
            </div>
          </div>
        </div>
      )}

      {/* Admin Profile */}
      {role === ROLES.ADMIN && (
        <div className="container-fluid py-3">
          <div className="row g-4">
            <div className="col-lg-8 col-12">
              <AdminProfileCard />
            </div>

            <div className="col-lg-4 col-12">
              <AdminSysInfoCard />
              <AcSecCard />
            </div>
          </div>
        </div>
      )}

      {/* Professor Profile */}
      {role === ROLES.PROFESSOR && (
        <div className="container-fluid py-3">
          <div className="row g-4">
            <div className="col-lg-8 col-12">
              <ProfessorProfileCard />
            </div>

            <div className="col-lg-4 col-12">
              <ProfessorSysInfoCard />
              <AcSecCard />
            </div>
          </div>
        </div>
      )}

      {/* Student Profile */}
      {role === ROLES.STUDENT && (
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
      )}
    </div>
  );
}

export default Profile;
