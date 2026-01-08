"use client";

import { useRouter } from "next/router";
import toast from "react-hot-toast";


function UpdateProfesssorForm() {
  const router = useRouter();

  const handleSubmit = () => {
    toast.success("Professor updated successfully!");
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

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">
                Select Subjects
              </label>
              <select
                multiple
                className="form-select px-4 py-3 w-100 rounded-3"
                style={{ height: "10mn 0px" }}
              >
                <option>Programming Fundamentals</option>
                <option>Data Structures</option>
                <option>Database Management Systems</option>
                <option>Computer Networks</option>
                <option>Operating Systems</option>
                <option>Web Technologies</option>
                <option>Artificial Intelligence</option>
                <option>Machine Learning</option>
              </select>
              <small className="text-muted">
                Hold Ctrl/Cmd to select multiple subjects
              </small>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button
              type="button"
              className="btn btn-outline-secondary px-4 py-2 rounded-3"
              onClick={() => router.back()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-success px-4 rounded-3"
              onClick={handleSubmit}
            >
              <i className="fas fa-chalkboard-teacher me-2"></i>
              Update Professor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfesssorForm