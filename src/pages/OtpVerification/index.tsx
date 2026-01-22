"use client";
import Image from "next/image";
import styles from "@/styles/otpVerification.module.css";

function ForgotPassword() {
  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
    >
      <div className={`card shadow-lg py-5 px-4 rounded-4 ${styles.ForgotPasswordCard}`}>
        {/* Icon */}
        <div className="text-center mb-3">
          <Image src="/images/Enter OTP.png" alt="Enter-OTP-img" width={200} height={200}/>
        </div>

        {/* Title */}
        <h3 className="text-center fw-bold mb-1">
          OTP Verification
        </h3>
        <p className="text-center text-muted mb-4">We will send you an One Time Password via this mail@gmai.com email address</p>

        {/* Form */}
        <form>
          <div className={`${styles.inputGroup}`}>
            <input
              type="email"
              placeholder="Email address"
              className={`${styles.input} mb-4`}
            />
          </div>

          <button type="submit" className={styles.verifyOtpBtn}>
            Verify OTP
          </button>
        </form>

      </div>
    </div>
  );
}

ForgotPassword.noLayout = true;
export default ForgotPassword;