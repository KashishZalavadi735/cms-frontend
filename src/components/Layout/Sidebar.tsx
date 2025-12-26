"use client";
// import path from "path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faGauge, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";

interface SidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

function Sidebar({ isSidebarOpen, closeSidebar }: SidebarProps) {
  // Helper function for active link
  const isActive = (path: string) => location.pathname === path;
  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? "mobile-open" : ""}`}>
      <div className="d-flex flex-column justify-content-between py-3" style={{ height: "100%" }}>
        {/* User Info */}
        <div className="d-flex align-items-center gap-3 ps-3 admin mb-3 mt-3">
          <FontAwesomeIcon icon={faUser} />
          <div>
            <div className="fw-bold">
              User 
            </div>
            <div className="small">email</div>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255, 255, 255, 0.5)" }} />

        <nav className="flex-grow-1">
          <ul className="nav flex-column">

            {/* Dashboard */}
            <li className="nav-item mb-2">
              <Link href="" className={`nav-link text-white ${isActive("") ? "active-link" : ""}`} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faGauge} className="me-2" />
                Dashboard
              </Link>
            </li>

            {/* Super Admin */}
            {/* Admin */}
            <li className="nav-item mb-2">
              <Link href="" className={`nav-link text-white ${isActive("") ? "active-link" : ""}`} onClick={closeSidebar}>
                <FontAwesomeIcon icon={faCircleUser} className="me-2" />
                Admin (HOD)
              </Link>
            </li>


          </ul>
        </nav>

        <hr style={{ borderColor: "rgba(255, 255, 255, 0.5)" }} />

        {/* Logout */}
        <div className="mb-2 ps-3">
          <button className="nav-link text-white bg-transparent border-0">
            <FontAwesomeIcon icon={faRightFromBracket} className="me-2"/>
            Logout 
          </button>
        </div>

      </div>
    </div>
  )
}

export default Sidebar;