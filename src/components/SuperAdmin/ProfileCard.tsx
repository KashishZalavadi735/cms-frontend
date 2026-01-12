"use client";

function ProfileCard() {
  return (
    <div className="card border-0 shadow-sm rounded-4 cardAnimation">
      <div className="card-body p-4">
        {/* Header */}
        <div className="d-flex align-items-center gap-4 mb-4">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold bg-primary"
            style={{ height: "80px", width: "80px", fontSize: "28px" }}
          >
            SA
          </div>

          <div>
            <h4 className="fw-bold mb-1">Super Admin</h4>
            <p className="text-muted mb-2">admin@college.edu</p>

            <div className="d-flex gap-2">
              <span
                className="badge text-uppercase rounded-pill px-3 py-2"
                style={{ color: "#7c3aed", background: "#f3e8ff" }}
              >
                Super Admin
              </span>
              <span className="badge text-uppercase rounded-pill px-3 py-2 text-primary bg-primary-subtle">
                System Administrator
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form>
          <div className="row g-4">
            <div className="col-md-6 mb-1">
              <label className="form-label fw-medium mb-2">Full Name</label>
              <input
                type="text"
                className="form-control px-4 py-3 w-100 rounded-3"
                value="Super Admin"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Email Address</label>
              <input
                type="email"
                className="form-control px-4 py-3 w-100 rounded-3"
                value="admin@college.edu"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Mobile Number</label>
              <input
                type="tel"
                className="form-control px-4 py-3 w-100 rounded-3"
                value="9876543210"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Role</label>
              <input
                type="text"
                className="form-control px-4 py-3 w-100 rounded-3"
                value="SuperAdmin"
                readOnly
              />
            </div>
          </div>

          {/* Change Password */}
          <h5 className="fw-semibold mt-4 mb-3">Change Password</h5>

          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">New Password</label>
              <input
                type="password"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Enter new password"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Confirm new password"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end gap-3 mt-4">
            <button
              type="button"
              className="btn btn-outline-secondary py-2 px-4"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary py-2 px-4">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
