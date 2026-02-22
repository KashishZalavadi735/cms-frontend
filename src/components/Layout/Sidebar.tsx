"use client";

import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ROLES, RoleType } from "@/constants/roles";
import { SidebarProps } from "@/types/type";



function Sidebar({ isSidebarOpen, closeSidebar }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [role, setRole] = useState<RoleType | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  // Helper function for active link
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedRole = localStorage.getItem("role") as RoleType | null;
    const user = localStorage.getItem("user");

    if (storedRole) setRole(storedRole);
    if (user) {
      setUserName(JSON.parse(user).name);
      setUserEmail(JSON.parse(user).email);
    }
  }, []);

  if (!role) return null;

  // Handle Logout 
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");

    router.push("/Login");
  };

  return (
    <div
      className={`d-flex flex-column justify-content-between text-white ${
        styles.sidebar
      } ${isSidebarOpen ? styles.mobileOpen : ""}`}
      style={{ height: "100%" }}
    >
      {/* User Info */}
      <div className="mx-4 mt-3">
        {/* Logo */}
        <div>
          <div className="d-flex align-items-center ">
            <div>
              <i className={`fas fa-university me-2 ${styles.icon}`}></i>
            </div>
            <div>
              <h4 className="fw-bold mb-0">CollegeMS</h4>
            </div>
          </div>
          <small className={`${styles.subTitle}`}>Management System</small>
        </div>
      </div>

      <hr style={{ borderColor: "rgba(255, 255, 255, 0.5)" }} />

      <div className="mx-3">
        <div
          className={`d-flex align-items-center py-2 px-3 mt-3 ${styles.adminCard}`}
        >
          <div>
            <i className={`fas fa-user-graduate fs-5 me-2 ${styles.icon}`}></i>
          </div>
          <div>
            <div className="fw-semibold">{userName}</div>
            <small>{userEmail}</small>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-grow-1 mt-3">
        <ul className="nav flex-column mx-1">
          {/* Dashboard */}
          <li className="nav-item mb-3">
            <Link
              href="/Dashboard"
              className={`nav-link text-white  ${styles.navLink} ${
                isActive("/Dashboard") ? styles.activeLink : ""
              }`}
              onClick={closeSidebar}
            >
              <i className="fas fa-gauge-high me-2"></i>
              Dashboard
            </Link>
          </li>

          {/* Super Admin menus */}
          {role === ROLES.SUPER_ADMIN && (
            <>
              <div
                className={`px-4 py-1 text-uppercase fw-bold small ${styles.sectionTitle}`}
              >
                Administration
              </div>

              <li className="nav-item ">
                <Link
                  href="/SuperAdmin/CreateAdmin"
                  className={`nav-link text-white ${styles.navLink} ${
                    isActive("/SuperAdmin/CreateAdmin") ? styles.activeLink : ""
                  }`}
                  onClick={closeSidebar}
                >
                  <i className="fas fa-user-plus me-2"></i>
                  Create Admin
                </Link>
              </li>

              <li className="nav-item mb-3">
                <Link
                  href="/SuperAdmin/ManageAdmin"
                  className={`nav-link text-white ${styles.navLink} ${
                    isActive("/SuperAdmin/ManageAdmin") ? styles.activeLink : ""
                  }`}
                  onClick={closeSidebar}
                >
                  <i className="fa fa-users-cog me-2"></i>
                  Manage Admins
                </Link>
              </li>
            </>
          )}

          {/* Admin menus */}
          {role === ROLES.ADMIN && (
            <>
              <div
                className={`px-4 py-1 text-uppercase fw-bold small ${styles.sectionTitle}`}
              >
                Department
              </div>

              <li className="nav-item">
                <Link
                  href="/Admin/AddProfessor"
                  className={`nav-link text-white ${styles.navLink} ${
                    isActive("/Admin/AddProfessor") ? styles.activeLink : ""
                  }`}
                  onClick={closeSidebar}
                >
                  <i className="fas fa-chalkboard-teacher me-2"></i>
                  Add Professor
                </Link>
              </li>

              <li className="nav-item mb-3">
                <Link
                  href="/Admin/ManageProfessor"
                  className={`nav-link text-white ${styles.navLink} ${
                    isActive("/Admin/ManageProfessor") ? styles.activeLink : ""
                  }`}
                  onClick={closeSidebar}
                >
                  <i className="fas fa-users-cog me-2"></i>
                  Manage Professor
                </Link>
              </li>

              <div
                className={`px-4 py-1 text-uppercase fw-bold small ${styles.sectionTitle}`}
              >
                Teaching
              </div>

              <li className="nav-item">
                <Link
                  href="/Admin/AssignAssignments"
                  className={`nav-link text-white ${styles.navLink} ${
                    isActive("/Admin/AssignAssignments")
                      ? styles.activeLink
                      : ""
                  }`}
                  onClick={closeSidebar}
                >
                  <i className="fas fa-tasks me-2"></i>
                  Assign Assignment
                </Link>
              </li>

              <li className="nav-item mb-3">
                <Link 
                  href="/Admin/BranchStudents"
                  className={`nav-link text-white ${styles.navLink} ${
                    isActive("/Admin/BranchStudents") ? styles.activeLink : ""
                  }`}
                  onClick={closeSidebar}
                >
                  <i className="fa fa-users me-2"></i>
                  View Students
                </Link>
              </li>
            </>
          )}

          {/* Professor Menu */}
          {role === ROLES.PROFESSOR && (
            <>
              <div
                className={`px-4 py-1 text-uppercase fw-bold small ${styles.sectionTitle}`}
              >
                Teaching
              </div>

              <li className="nav-item">
                <Link
                  href="/Professor/AssignAssignments"
                  className={`nav-link text-white ${styles.navLink} ${
                    isActive("/Professor/AssignAssignments")
                      ? styles.activeLink
                      : ""
                  }`}
                  onClick={closeSidebar}
                >
                  <i className="fas fa-tasks me-2"></i>
                  Assign Assignment
                </Link>
              </li>

              <li className="nav-item mb-3">
                <Link
                  href="/Professor/BranchStudents"
                  className={`nav-link text-white ${styles.navLink} ${
                    isActive("/Professor/BranchStudents")
                      ? styles.activeLink
                      : ""
                  }`}
                  onClick={closeSidebar}
                >
                  <i className="fa fa-users me-2"></i>
                  View Students
                </Link>
              </li>
            </>
          )}

          {/* Student Menus */}
          {role === ROLES.STUDENT && (
            <>
              <div
                className={`px-4 py-1 text-uppercase fw-bold small ${styles.sectionTitle}`}
              >
                Learning
              </div>

              <li className="nav-item">
                <Link
                  href="/Student/MyAssignment"
                  className={`nav-link text-white ${styles.navLink} ${
                    isActive("/Student/MyAssignment") ? styles.activeLink : ""
                  }`}
                  onClick={closeSidebar}
                >
                  <i className="fas fa-book-open me-2"></i>
                  My Assignments
                </Link>
              </li>

              <li className="nav-item mb-3">
                <Link
                  href="/Student/AssignmentStatus"
                  className={`nav-link text-white ${styles.navLink} ${
                    isActive("/Student/AssignmentStatus")
                      ? styles.activeLink
                      : ""
                  }`}
                  onClick={closeSidebar}
                >
                  <i className="fas fa-clipboard-check me-2"></i>
                  Assignment Status
                </Link>
              </li>
            </>
          )}

          <hr
            className="m-0"
            style={{ borderColor: "rgba(255, 255, 255, 0.25)" }}
          />

          <li className="nav-item mt-3">
            <Link
              href="/Profile"
              className={`nav-link text-white ${styles.navLink} ${
                isActive("/Profile") ? styles.activeLink : ""
              }`}
              onClick={closeSidebar}
            >
              <i className="fa fa-user-circle me-2"></i>
              Profile
            </Link>
          </li>

          <li className="nav-item">
            <button onClick={handleLogout} className={`nav-link text-white ${styles.navLink}`}>
              <i className="fas fa-right-from-bracket me-2"></i>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <hr className="m-0" style={{ borderColor: "rgba(255, 255, 255, 0.5)" }} />

      {/* Footer */}
      <div className={`text-center py-3 ${styles.footer}`}>
        College Management System v2.0 <br />© 2023 All rights reserved
      </div>
    </div>
  );
}

export default Sidebar;
