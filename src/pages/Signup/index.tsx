"use client";

import styles from "@/styles/signup.module.css";

function Signup() {
  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
    >
      <div className={`card shadow-lg py-5 px-4 rounded-4 ${styles.signupCard}`}>
        {/* Icon */}
        <div className="text-center mb-3">
          <div
            className={`rounded-circle d-inline-flex align-items-center justify-content-center ${styles.icon}`}
          >
            <i className="fas fa-user-graduate"></i>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center fw-bold mb-1">Student Registration</h3>
        <p className="text-center text-muted mb-4">
          Create your student account
        </p>

        {/* Form */}
        <form>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Full Name"
              className={`${styles.input} ${styles.inputTop}`}
            />
            <input
              type="email"
              placeholder="Email address"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />

            <select className={styles.input}>
              <option value="">Select Branch</option>
              <option value="CS">Computer Science</option>
              <option value="IT">Information Technology</option>
              <option value="EC">Electronics</option>
              <option value="ME">Mechanical</option>
            </select>

            <select className={styles.input}>
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
            </select>

            <select className={`${styles.input} ${styles.inputBottom}`}>
              <option value="">Select Year</option>
              <option value="FY">FY</option>
              <option value="SY">SY</option>
              <option value="TY">TY</option>
            </select>
          </div>

          <button type="submit" className={`${styles.signupBtn} mt-4`}>
            <i className="fas fa-user-plus me-2"></i>
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <a href="/Login" className="fw-semibold text-primary text-decoration-none">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

Signup.noLayout = true;
export default Signup;