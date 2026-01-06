"use client";
import styles from "@/styles/login.module.css";

function Login() {
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
        <form>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email address"
              className={`${styles.input} ${styles.inputTop}`}
            />

            <input
              type="password"
              placeholder="Password"
              className={`${styles.input} ${styles.inputBottom}`}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Remember me</label>
            </div>

            <a href="#" className="text-primary text-decoration-none">
              Forgot your password?
            </a>
          </div>

          <button type="submit" className={styles.loginBtn}>
            <i className="fas fa-right-to-bracket me-2"></i>
            Sign in
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Don't have an account? {" "}
          <a href="/Signup" className="fw-semibold text-primary text-decoration-none">
            Sign up as Student
          </a>
        </p>
      </div>
    </div>
  );
}

Login.noLayout = true;
export default Login;