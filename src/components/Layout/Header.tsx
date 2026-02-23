"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Header.module.css";
import { AppNotification, HeaderProps } from "@/types/type";
import { ROLES, RoleType } from "@/constants/roles";
import { usePathname } from "next/navigation";
import {
  countUnreadNotification,
  getAllNotification,
  markmarkNotificationAsRead,
} from "@/services/notificationService";

// Initial function
const getInitials = (name: string) => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};

// Role
const ROLE_ITEMS = [
  {
    role: ROLES.SUPER_ADMIN,
    label: "SuperAdmin",
    desc: "Full system access",
    icon: "fa-crown",
    bgClass: styles.bgPurple,
  },
  {
    role: ROLES.ADMIN,
    label: "Admin (HOD)",
    desc: "Department Management",
    icon: "fa-user-tie",
    bgClass: styles.bgBlue,
  },
  {
    role: ROLES.PROFESSOR,
    label: "Professor",
    desc: "Teaching & assignments",
    icon: "fa-chalkboard-teacher",
    bgClass: styles.bgGreen,
  },
  {
    role: ROLES.STUDENT,
    label: "Student",
    desc: "View assignments & submit",
    icon: "fa-user-graduate",
    bgClass: styles.bgOrange,
  },
];

function Header({ toggleSidebar }: HeaderProps) {
  const pathname = usePathname();

  // Notification state
  const [notifications, setNotifications] = useState<AppNotification[]>([]);

  // Unreadcount state
  const [unreadCount, setUnreadCount] = useState<number>(0);

  // Loading state
  const [loading, setLoading] = useState<boolean>(false);

  // Notification open state
  const [notifyOpen, setNotifyOpen] = useState(false);

  // Role open state
  const [roleOpen, setRoleOpen] = useState(false);

  // Sidebar navigation state
  const [isMobile, setIsMobile] = useState(false);

  // Role state
  const [role, setRole] = useState<RoleType | null>(null);

  // Username state
  const [userName, setUserName] = useState("");

  // Useremail state
  const [userEmail, setUserEmail] = useState("");

  const roleRef = useRef<HTMLDivElement>(null);

  const notifyRef = useRef<HTMLDivElement>(null);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Load user data
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedRole = localStorage.getItem("role") as RoleType | null;
    const user = localStorage.getItem("user");

    if (storedRole) setRole(storedRole);

    if (user) {
      const parsed = JSON.parse(user);
      setUserName(parsed.name);
      setUserEmail(parsed.email);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Role
      if (roleRef.current && !roleRef.current.contains(e.target as Node)) {
        setRoleOpen(false);
      }

      // Notification
      if (notifyRef.current && !notifyRef.current.contains(e.target as Node)) {
        setNotifyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    fetchUnreadCount();
    fetchNotifications();
  }, []);

  // Fetch notifications
  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const data = await getAllNotification();
      const normalized = data.map((n) => ({
        ...n,
        isRead: n.readStatus.enumValue === "READ",
      }));
      console.log("Notification data: ", normalized);
      setNotifications(normalized);
    } catch (error) {
      console.error("Failed to fetch notifications", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch unread count
  const fetchUnreadCount = async () => {
    try {
      const count = await countUnreadNotification();
      console.log("Total notification: ", count);
      setUnreadCount(count);
    } catch (error) {
      console.error("Failed to fetch unread count", error);
    }
  };

  // Mark notification as read
  const handleMarkAsRead = async (id: string) => {
    try {
      await markmarkNotificationAsRead(id);

      setNotifications((prev) =>
        prev.map((n) =>
          n.id === id
            ? { ...n, isRead: true, readStatus: { enumValue: "READ" } }
            : n,
        ),
      );

      setUnreadCount((prev) => Math.max(prev - 1, 0));
    } catch (error) {
      console.error("Failed to mark notification as read", error);
    }
  };

  if (!role) return null;

  const currentRole = ROLE_ITEMS.find((r) => r.role === role);

  // Dynamic page title
  const pageTitle =
    pathname
      .split("/")
      .pop()
      ?.replace(/([A-Z])/g, " $1") || "Dashboard";

  return (
    <div
      className={`${styles.header} d-flex align-items-center justify-content-between bg-white px-4 py-3`}
      style={{ borderBottom: "1px solid #e5e7eb" }}
    >
      {/* Left Section */}
      <div className="d-flex align-items-center gap-3">
        {isMobile && (
          <i
            className="fa fa-bars me-2 fs-4"
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          ></i>
        )}
        <div>
          <h5 className="fw-bold mb-0">{pageTitle}</h5>
          <small className={`${styles.subTitle} text-muted`}>
            Welcome to College Management System
          </small>
        </div>
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">
        {/* Roles */}
        <div className="position-relative" ref={roleRef}>
          <button
            className={`border-0 p-2 d-flex align-items-center ${styles.roleBtn}`}
            onClick={() => setRoleOpen(!roleOpen)}
          >
            <i className={`fas ${currentRole?.icon} me-2`}></i>
            {currentRole?.label}
            <i className="fas fa-chevron-down ms-2"></i>
          </button>

          {roleOpen && (
            <div
              className={` position-absolute bg-white border ${styles.dropdown}`}
            >
              <div
                key={currentRole?.role}
                className={` d-flex align-items-center gap-3 py-2 px-3 ${styles.dropItem}`}
              >
                <span
                  className={`${styles.icon} ${currentRole?.bgClass} d-flex align-items-center justify-content-center`}
                >
                  <i className={`fas ${currentRole?.icon}`}></i>
                </span>
                <div>
                  <strong>{currentRole?.label}</strong>
                  <p className="m-0 text-muted">{currentRole?.desc}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Notification */}
        <div className={`${styles.notify}`} ref={notifyRef}>
          <span
            className={`${styles.notifyIcon} d-flex align-items-center justify-content-center`}
            onClick={() => setNotifyOpen(!notifyOpen)}
          >
            <i className={`fas fa-bell text-muted`}></i>

            {unreadCount > 0 && (
              <span className={styles.notifyBadge}>{unreadCount}</span>
            )}
          </span>

          {notifyOpen && (
            <div className={styles.notifyDropdown}>
              <div className={styles.notifyHeader}>Notifications</div>

              {loading ? (
                <div className="p-3 text-center">Loading...</div>
              ) : notifications.length === 0 ? (
                <div className="p-3 text-muted text-center">
                  No notifications
                </div>
              ) : (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`${styles.notificationItem} ${
                      !n.isRead ? styles.unread : ""
                    }`}
                  >
                    <div className={styles.notificationContent}>
                      <div className={styles.notificationTitle}>{n.title}</div>
                      <div className={styles.notificationMessage}>
                        {n.message}
                      </div>
                    </div>

                    {!n.isRead && (
                      <button
                        className={styles.markReadBtn}
                        onClick={() => handleMarkAsRead(n.id)}
                        title="Mark as read"
                      >
                        <i className="fas fa-check"></i>
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* User */}
        <div className={styles.user}>
          <div className={styles.avatar}>{getInitials(userName)}</div>
          <div>
            <div className="fw-semibold">{userName}</div>
            <small className="text-muted">{userEmail}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
