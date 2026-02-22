"use client";

import styles from "@/styles/Login.module.css";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { loginService } from "@/services/authService";

function Login() {
  const router = useRouter();

  // Email state
  const [email, setEmail] = useState("");

  // Password state
  const [password, setPassword] = useState("");

  // Show password state
  const [showPassword, setShowPassword] = useState(false);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginService({ email, password });
      console.log("Login data: ", res);

      const { token, user } = res.data;

      // Save token and user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);

      toast.success("Login successfully!");

      router.push("/Dashboard");
    } catch (error: any) {
      console.error("Error to Login: ", error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
    >
      <div className={`card shadow-lg py-5 px-4 rounded-4 ${styles.loginCard}`}>
        {/* Icon */}
        <div className="text-center mb-3">
          <div
            className={`rounded-circle d-inline-flex align-items-center justify-content-center ${styles.icon}`}
          >
            <i className="fas fa-university"></i>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center fw-bold mb-1">
          College Management <br /> System
        </h3>
        <p className="text-center text-muted mb-4">Sign in to your account</p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <div className="position-relative">
              <input
                type="email"
                placeholder="Email address"
                className={`${styles.input} ${styles.inputTop}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`${styles.input} ${styles.inputBottom}`}
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
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Remember me</label>
            </div>

            <a
              href="/ForgotPassword"
              className="text-primary text-decoration-none"
            >
              Forgot your password?
            </a>
          </div>

          <button type="submit" className={styles.loginBtn} disabled={loading}>
            <i className="fas fa-right-to-bracket me-2"></i>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Don't have an account?{" "}
          <a
            href="/Signup"
            className="fw-semibold text-primary text-decoration-none"
          >
            Sign up as Student
          </a>
        </p>
      </div>
    </div>
  );
}

Login.noLayout = true;
export default Login;
