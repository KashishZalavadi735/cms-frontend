"use client";

import { useRouter } from "next/router";
import toast from "react-hot-toast";

function AddAdminForm() {
  const router = useRouter();

  const handleSubmit = () => {
    toast.success("Admin added successfully!");
    router.push("/Dashboard");
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 cardAnimation">
      <div className="card-body p-4">
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-medium mb-2">Full Name</label>
              <input
                type="text"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Enter full name"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Email Address</label>
              <input
                type="email"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Enter email address"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Mobile Number</label>
              <input
                type="tel"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Enter mobile number"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Branch</label>
              <select className="form-select px-4 py-3 w-100 rounded-3">
                <option>Select Branch</option>
                <option>Mechanical Engineering</option>
                <option>Electrical Engineering</option>
                <option>Civil Engineering</option>
              </select>
            </div>
          </div>

          {/* Login Info */}
          <div className="mt-4">
            <h6 className="fw-semibold mb-2">Login Credentials</h6>
            <div
              className="text-primary p-3 rounded-3 mb-0"
              style={{
                backgroundColor: "#eff6ff",
                border: "1px solid #bfdbfe",
              }}
            >
              Login credentials will be automatically generated and sent to the
              HOD's email address.
              <br />
              The HOD will receive an email with temporary password and login
              instructions.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button type="button" className="btn btn-outline-secondary px-4 py-2 rounded-3" onClick={() => router.back()}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary px-4 rounded-3" onClick={handleSubmit}>
              <i className="fas fa-user-plus me-2"></i>
              Create Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAdminForm;
