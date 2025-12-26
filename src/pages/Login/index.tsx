"use client";

import Link from "next/link";

function Login() {
  return (
    <div className="d-flex justify-content-center align-self-center align-items-center vw-100 vh-100">
      <div className="card shadow p-5" style={{ width: "500px" }}>
        <h3 className="text-primary text-center">
          <b>CMS</b>
        </h3>
        <h4 className="text-center">
          <b>College Management System</b>
        </h4>
        <h6 className="text-muted text-center">Sign in to your account</h6>
        <form>
          {/* Email */}
          <div className="mt-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your Email"
            />
          </div>

          {/* Password */}
          <div className="mt-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your Password here"
            />
          </div>

          <div className="mt-3 text-end">
            <Link href="" className="text-primary text-decoration-none">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
