"use client";

import Image from "next/image";
import styles from "@/styles/OtpVerification.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { verifyOtpService } from "@/services/forgotPasswordService";
import toast from "react-hot-toast";

function OtpVerification() {
  const router = useRouter();
  const { email } = router.query;

  // OTP state
  const [otp, setOtp] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Handle verify
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await verifyOtpService(email as string, otp);
      console.log("Verify OTP data: ", response);

      toast.success("OTP verified!");

      router.push({
        pathname: "/ChangePassword",
        query: { email },
      });
    } catch (error: any) {
      console.error("Error verifying otp: ", error);
      toast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
    >
      <div
        className={`card shadow-lg py-5 px-4 rounded-4 ${styles.OtpVerificationCard}`}
      >
        {/* Icon */}
        <div className="text-center mb-3">
          <Image
            src="/images/Enter_OTP.png"
            alt="Enter-OTP-img"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* Title */}
        <h3 className="text-center fw-bold mb-1">OTP Verification</h3>
        <p className="text-center text-muted mb-4">
          We will send you an One Time Password via this mail@gmai.com email
          address
        </p>

        {/* Form */}
        <form onSubmit={handleVerify}>
          <div className={`${styles.inputGroup}`}>
            <input
              type="text"
              name="otp"
              placeholder="O T P"
              className={`${styles.input} mb-4`}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.verifyOtpBtn} disabled={loading}>
            {loading ? "Verifying OTP..." :"Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}

OtpVerification.noLayout = true;
export default OtpVerification;
