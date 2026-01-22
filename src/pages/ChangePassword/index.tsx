"use client";
import styles from "@/styles/changePassword.module.css";
import Image from "next/image";

function ChangePassword() {
  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
    >
      <div className={`card shadow-lg py-5 px-4 rounded-4 ${styles.changePasswordCard}`}>
        {/* Icon */}
        <div className="text-center">
          <Image src="/images/Reset password.png" alt="Enter-OTP-img" width={300} height={250}/>
        </div>

        {/* Title */}
        <h3 className="text-center fw-bold mb-1">
          Reset Password
        </h3>
        <p className="text-center text-muted mb-2">Enter strong passwords</p>

        {/* Form */}
        <form>
          <div className={`mb-4 ${styles.inputGroup}`}>
            <input
              type="password"
              placeholder="New Password"
              className={`${styles.input} ${styles.inputTop}`}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className={`${styles.input} ${styles.inputBottom}`}
            />
          </div>

         

          <button type="submit" className={styles.changePasswordBtn}>
            Change Password
          </button>
        </form>

      </div>
    </div>
  );
}

ChangePassword.noLayout = true;
export default ChangePassword;