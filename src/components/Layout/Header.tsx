"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Header.module.css";

interface HeaderProps {
  toggleSidebar: () => void;
}

function Header({ toggleSidebar }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);  //Breakpoint
  
  const menuRef = useRef<HTMLDivElement>(null);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  },[]);

  return (
    <div className={`${styles.header} d-flex align-items-center justify-content-between bg-white px-4 py-3`} style={{borderBottom: "1px solid #e5e7eb"}}>
      
      {/* Left Section */}
      <div className="d-flex align-items-center gap-3">
        {isMobile && (
          <i className="fa fa-bars me-2 fs-4" onClick={toggleSidebar} style={{cursor: "pointer"}}></i>
        )}
        <div>
          <h5 className="fw-bold mb-0">Dashboard</h5>
          <small className={`${styles.subTitle} text-muted`}>Welcome to College Management System</small>
        </div>
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">
        
        {/* Roles */}
        <div className="position-relative" ref={menuRef}>
          <button className={`border-0 p-2 d-flex align-items-center ${styles.roleBtn}`} onClick={() => setOpen(!open)}>
            <i className="fas fa-user-shield me-2"></i>
            SuperAdmin
            <i className="fas fa-chevron-down ms-2"></i>
          </button>

          {open && (
            <div className={` position-absolute bg-white border ${styles.dropdown}`}>
              <div className={` d-flex align-items-center gap-3 py-2 px-3 border-bottom ${styles.dropItem}`}>
                <span className={`${styles.icon} ${styles.bgPurple} d-flex align-items-center justify-content-center`}>
                  <i className="fas fa-crown purple"></i>
                </span>
                <div>
                  <strong>SuperAdmin</strong>
                  <p className="m-0 text-muted">Full system access</p>
                </div>
              </div>

              <div className={`d-flex align-items-center gap-3 py-2 px-3 border-bottom ${styles.dropItem}`}>
                <span className={`${styles.icon} ${styles.bgBlue} d-flex align-items-center justify-content-center`}>
                  <i className="fas fa-user-tie"></i>
                </span>
                <div>
                  <strong>Admin (HOD)</strong>
                  <p className="m-0 text-muted">Department Management</p>
                </div>
              </div>

              <div className={`d-flex align-items-center gap-3 py-2 px-3 border-bottom ${styles.dropItem}`}>
                <span className={`${styles.icon} ${styles.bgGreen} d-flex align-items-center justify-content-center`}>
                  <i className="fas fa-chalkboard-teacher"></i>
                </span>
                <div>
                  <strong>Professor</strong>
                  <p className="m-0 text-muted">Teaching & assignments</p>
                </div>
              </div>

              <div className={`d-flex align-items-center gap-3 py-2 px-3 ${styles.dropItem}`}>
                <span className={`${styles.icon} ${styles.bgOrange} d-flex align-items-center justify-content-center`}>
                  <i className="fas fa-user-graduate"></i>
                </span>
                <div>
                  <strong>Student</strong>
                  <p className="m-0 text-muted">View assignments & submit</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Notification */}
        <div className={`${styles.notify}`}>
          <span className={`${styles.notifyIcon} d-flex align-items-center justify-content-center`}>
            <i className={`fas fa-bell text-muted`}></i>
          </span>
        </div>

        {/* User */}
        <div className={styles.user}>
          <div className={styles.avatar}>SA</div>
          <div>
            <div className="fw-semibold">Super Admin</div>
            <small className="text-muted">admin@college.edu</small>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header