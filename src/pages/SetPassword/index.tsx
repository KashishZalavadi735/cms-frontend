"use client";

import styles from "@/styles/SetPassword.module.css";
import toast from "react-hot-toast";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { setPasswordService } from "@/services/setPasswordService";

function SetPassword() {
  const router = useRouter();
  const { token } = router.query;

  // Password state
  const [password, setPassword] = useState("");

  // Confirm password state
  const [confirm, setConfirm] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Show password state
  const [showPassword, setShowPassword] = useState(false);

  // Show confirm password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token || typeof token !== "string") {
      toast.error("Invalid or missing token");
      return;
    }

    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const data = await setPasswordService({ token: token, password });
      console.log("Set password data: ", data);

      toast.success("Password set successfully!");

      router.push("/Login");
    } catch (error: any) {
      console.error("Error to set password: ", error);
      toast.error(error.response?.data?.message || "Failed to set password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
    >
      <div
        className={`card shadow-lg py-5 px-4 rounded-4 text-center ${styles.SetPasswordCard}`}
      >
        <h2 className="fw-bold mb-2">College Management System</h2>
        {/* Icon */}
        <div>
          <Image
            src="/images/My_password.png"
            alt="My-Password-img"
            width={300}
            height={250}
            priority
          />
        </div>

        {/* Title */}
        <h3 className="fw-semibold mb-2">Set Password</h3>
        <p className="text-muted mb-2">
          Password must be at least 8 characters with uppercase, number &
          special character.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className={`mb-4 ${styles.inputGroup}`}>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                className={`${styles.input} ${styles.inputTop}`}
                aria-label="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                } ${styles.eyeIcon}`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

            <div className="position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={`${styles.input} ${styles.inputBottom}`}
                aria-label="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <i
                className={`fa-solid ${
                  showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                } ${styles.eyeIcon}`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            </div>
          </div>

          <button type="submit" className={styles.SetPasswordBtn}>
            {loading ? "Creating password..." : "Create Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

SetPassword.noLayout = true;
export default SetPassword;
