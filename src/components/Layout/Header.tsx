"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Header.module.css";

interface HeaderProps {
  toggleSidebar: () => void;
}

function Header({ toggleSidebar }: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);  //Breakpoint

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);

  return (
    <div className={`${styles.header} shadow-sm bg-white p-3`}>
      {isMobile && (
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            style={{ cursor: "pointer" }}
            onClick={toggleSidebar}
          />
        )}
        <h5 className="mb-0 fw-bold">College Management System</h5>
    </div>
  )
}

export default Header