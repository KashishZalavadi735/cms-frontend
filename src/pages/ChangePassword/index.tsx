"use client";
import { changePasswordService } from "@/services/forgotPasswordService";
import styles from "@/styles/ChangePassword.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

function ChangePassword() {
  const router = useRouter();
  const { email } = router.query;

  // Password state
  const [password, setPassword] = useState("");

  // Confirm password state
  const [confirmPassword, setConfirmPassword] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Show password state
  const [showPassword, setShowPassword] = useState(false);

  // Show confirm password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await changePasswordService(email as string, password, confirmPassword);
      console.log("Change Password data: ", response);

      toast.success("Password changed successfully!");

      router.push("/Login");
    } catch (error: any) {
      console.error("Error changing password: ", error);
      toast.error(error.response?.data?.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
    >
      <div
        className={`card shadow-lg py-5 px-4 rounded-4 ${styles.changePasswordCard}`}
      >
        {/* Icon */}
        <div className="text-center">
          <Image
            src="/images/Reset_password.png"
            alt="Enter-OTP-img"
            width={300}
            height={250}
            priority
          />
        </div>

        {/* Title */}
        <h3 className="text-center fw-bold mb-1">Reset Password</h3>
        <p className="text-center text-muted mb-2">Enter strong passwords</p>

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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i
                className={`fa-solid ${
                  showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                } ${styles.eyeIcon}`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            </div>
          </div>

          <button type="submit" className={styles.changePasswordBtn} disabled={loading}>
            {loading ? "Saving Password..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

ChangePassword.noLayout = true;
export default ChangePassword;
