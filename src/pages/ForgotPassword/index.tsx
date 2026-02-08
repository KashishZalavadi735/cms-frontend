"use client";
import Image from "next/image";
import styles from "@/styles/ForgotPassword.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { sendOtpService } from "@/services/forgotPasswordService";
import toast from "react-hot-toast";

function ForgotPassword() {
  const router = useRouter();

  // Email state
  const [email, setEmail] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await sendOtpService(email);
      console.log("Sending Otp data: ", response);

      toast.success("OTP sent to your email!");

      router.push({
        pathname: "/OtpVerification",
        query: { email },
      });
    } catch (error: any) {
      console.error("Error sending otp: ", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again later.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
    >
      <div
        className={`card shadow-lg py-5 px-4 rounded-4 ${styles.ForgotPasswordCard}`}
      >
        {/* Icon */}
        <div className="text-center mb-3">
          <Image
            src="/images/Mail_sent.png"
            alt="Enter-OTP-img"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* Title */}
        <h3 className="text-center fw-bold mb-1">Forgot Password</h3>
        <p className="text-center text-muted mb-4">
          We will send you an One Time Password via this email address
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className={`${styles.inputGroup}`}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className={`${styles.input} ${styles.inputTop} mb-4`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={styles.sendOtpBtn}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}

ForgotPassword.noLayout = true;
export default ForgotPassword;
