import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import React, { Children, useState } from "react";

type LayoutProps ={
    children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="d-flex vh-100 w-100" style={{ backgroundColor: "#F3F4F6" }}>
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

        <div className="wrapper container p-0">
            <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <div className="container p-0 inner-my">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout;