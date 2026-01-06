"use client";

import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React, { useEffect, useState } from "react";

type LayoutProps ={
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);  

  return (
    <div className="d-flex w-100" style={{ height: "100vh", backgroundColor: "#F3F4F6" }}>
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

          {/* Mobile overlay */}
          {isMobile && isSidebarOpen && (
            <div onClick={() => setIsSidebarOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 998}}></div>
          )}

        <div className="container-fluid p-0 flex-grow-1 d-flex flex-column overflow-hidden" style={{marginLeft: isMobile ? "0" : "280px"}}>
            <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <div className="container-fluid p-0 flex-grow-1 overflow-y-auto">
              {children}
            </div>
        </div>
    </div>
  )
}

export default Layout