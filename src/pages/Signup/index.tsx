"use client";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <div className="card shadow p-5" style={{ width: "600px" }}>
        <h3 className="text-primary text-center">
          <b>CMS</b>
        </h3>
        <h4 className="text-center">
          <b>College Management System</b>
        </h4>
        <h6 className="text-muted text-center">Sign up to your account</h6>

        <form>
          {/* Name */}
          <div className="mt-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your Name here"
            />
          </div>

          {/* Email */}
          <div className="mt-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your Email"
            />
          </div>

          {/* Password */}
          <div className="mt-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your Password"
            />
          </div>

          {/* Branch */}
          <div className="mt-3">
            <label htmlFor="branch" className="form-label">
              Branch
            </label>
            <select className="form-select" id="branch">
              <option value="">Select Branch</option>
              <option value="Computer">Computer</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Electrical">Electrical</option>
              <option value="Civil">Civil</option>
              <option value="Chemical">Chemical</option>
            </select>
          </div>

          {/* Semester */}
          <div className="mt-3">
            <label htmlFor="semester" className="form-label">
              Semester
            </label>
            <select className="form-select" id="semester">
              <option value="">Select Semester</option>
              <option value="1">Sem 1</option>
              <option value="2">Sem 2</option>
              <option value="3">Sem 3</option>
              <option value="4">Sem 4</option>
              <option value="5">Sem 5</option>
              <option value="6">Sem 6</option>
              <option value="7">Sem 7</option>
              <option value="8">Sem 8</option>
            </select>
          </div>

          {/* Year */}
          <div className="mt-4">
            <label htmlFor="year" className="form-label">
              Year
            </label>
            <select className="form-select" id="year">
              <option value="">Select Year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100 mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;