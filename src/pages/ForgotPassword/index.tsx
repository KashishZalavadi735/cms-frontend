"use client";
import Image from "next/image";
import styles from "@/styles/forgotPassword.module.css";

function ForgotPassword() {
  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
    >
      <div className={`card shadow-lg py-5 px-4 rounded-4 ${styles.ForgotPasswordCard}`}>
        {/* Icon */}
        <div className="text-center mb-3">
          <Image src="/images/Mail sent.png" alt="Enter-OTP-img" width={200} height={200}/>
        </div>

        {/* Title */}
        <h3 className="text-center fw-bold mb-1">
          Forgot Password
        </h3>
        <p className="text-center text-muted mb-4">We will send you an One Time Password via this email address</p>

        {/* Form */}
        <form>
          <div className={`${styles.inputGroup}`}>
            <input
              type="email"
              placeholder="Email address"
              className={`${styles.input} ${styles.inputTop} mb-4`}
            />
          </div>

          <button type="submit" className={styles.sendOtpBtn}>
            Send OTP
          </button>
        </form>

      </div>
    </div>
  );
}

ForgotPassword.noLayout = true;
export default ForgotPassword;