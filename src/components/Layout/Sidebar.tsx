"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faCircleUser,
  faGauge,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

interface SidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

function Sidebar({ isSidebarOpen, closeSidebar }: SidebarProps) {
  const router = useRouter();
  const [adminOpen, setAdminOpen] = useState(false);

  // Helper function for active link
  const isActive = (path: string) => router.pathname === path;
  const isParentActive = (prefix: string) => router.pathname.startsWith(prefix);

  return (
    <div
      className={`${styles.sidebar} ${isSidebarOpen ? styles.mobileOpen : ""}`}
    >
      <div
        className="d-flex flex-column justify-content-between py-3"
        style={{ height: "100%" }}
      >
        {/* User Info */}
        <div className="d-flex align-items-center gap-3 ps-3 admin mb-3 mt-3">
          <FontAwesomeIcon icon={faUser} />
          <div>
            <div className="fw-bold">User</div>
            <div className="small">email</div>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255, 255, 255, 0.5)" }} />

        <nav className="flex-grow-1">
          <ul className="nav flex-column">
            {/* Dashboard */}
            <li className="nav-item mb-2">
              <Link
                href="/Dashboard"
                className={`nav-link text-white ${
                  isActive("/Dashboard") ? styles.activeLink : ""
                }`}
                onClick={closeSidebar}
              >
                <FontAwesomeIcon icon={faGauge} className="me-2" />
                Dashboard
              </Link>
            </li>

            {/* Super Admin */}
            {/* Admin */}
            <li className="nav-item mb-2">
              <button
                className={`nav-link text-white d-flex justify-content-between align-items-center w-100 ${
                  isParentActive("/Admin") ? styles.activeLink : ""
                }`}
                onClick={() => setAdminOpen(!adminOpen)}
              >
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faCircleUser} className="me-2" />
                  Admin (HOD)
                </div>
                
                <FontAwesomeIcon icon={adminOpen ? faChevronDown : faChevronRight} className={`arrow ${adminOpen ? "rotate" : ""}`}/>
              </button>

              {/* Submenu */}
              {adminOpen && (
                <ul className="nav flex-column ms-4 mt-2">
                  <li className="nav-item mb-2">
                    <Link
                      href="/Admin/AddAdmin"
                      className={`nav-link text-white ${
                        isActive("/Admin/AddAdmin") ? "active-link" : ""
                      }`}
                      onClick={() => {
                        setAdminOpen(false); // close submenu
                        closeSidebar(); // close mobile sidebar if needed
                      }}
                    >
                      Add Admin
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/Admin/ShowAdmin"
                      className={`nav-link text-white ${
                        isActive("/Admin/AddAdmin") ? "active-link" : ""
                      }`}
                      onClick={() => {
                        setAdminOpen(false); // close submenu
                        closeSidebar(); // close mobile sidebar if needed
                      }}
                    >
                      Show Admin
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <hr style={{ borderColor: "rgba(255, 255, 255, 0.5)" }} />

        {/* Logout */}
        <div className="mb-2 ps-3">
          <button className="nav-link text-white bg-transparent border-0">
            <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
