"use client";

import { useRouter } from "next/router";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

function AssignmentForm() {
  const router = useRouter();

  const handleSubmit = () => {
    toast.success("Assignment added successfully!");
    router.push("/Dashboard");
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 cardAnimation">
      <div className="card-body p-4">
        <form>
          <div className="row mt-1">
            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">
                Assignment Title
              </label>
              <input
                type="text"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Enter assignment title"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Subjects</label>
              <select className="form-select px-4 py-3 w-100 rounded-3">
                <option>Programming Fundamentals</option>
                <option>Database Management Systems</option>
                <option>Operating Systems</option>
                <option>Computer Networks</option>
                <option>Web Technologies</option>
                <option>Data Structures</option>
              </select>
            </div>
          </div>

          <div className="row mt-1">
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
              <label className="form-label fw-medium mb-2">Year</label>
              <select className="form-select px-4 py-3 w-100 rounded-3">
                <option>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
                <option>Fourth Year</option>
              </select>
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Semester</label>
              <select className="form-select px-4 py-3 w-100 rounded-3">
                <option>Semester 1</option>
                <option>Semester 2</option>
                <option>Semester 3</option>
                <option>Semester 4</option>
                <option>Semester 5</option>
                <option>Semester 6</option>
                <option>Semester 7</option>
                <option>Semester 8</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Due Date</label>
              <input
                type="date"
                className="form-control px-4 py-3 w-100 rounded-3"
              />
            </div>
          </div>

          <div className="mt-1">
            <label className="form-label fw-medium mb-2">Description</label>
            <textarea
              className="form-select px-4 py-3 w-100 rounded-3"
              rows={4}
              placeholder="Enter assignment description and instructions"
            ></textarea>
          </div>

          <div className="mt-1">
            <label className="form-label fw-medium mb-2">
              Attachment (PDF/Image)
            </label>
            <div
              className="rounded-4 p-4 text-center"
              style={{ border: "2px dashed #cfd4dc", cursor: "pointer" }}
              onClick={handleBoxClick}
            >
              <i className="fas fa-cloud-upload fs-2 text-muted"></i>

              {/* Show this ONLY when no file selected */}
              {!fileName && (
                <>
                  <p className="mb-1 text-muted fw-medium">
                    Drag & drop files here or{" "}
                    <span className="text-primary">browse</span>
                  </p>
                  <small className="text-muted">
                    Supported formats: PDF, JPG, PNG (Max 10MB)
                  </small>
                </>
              )}

              {/* Show this ONLY after file selected */}
              {fileName && (
                <p className="mt-2 fw-medium">
                  <b>Selected file:</b> {fileName}
                </p>
              )}

              {/* Hidden Input */}
              <input
                ref={fileInputRef}
                type="file"
                className="d-none"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
            </div>
          </div>

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
              className="btn px-4 rounded-3"
              onClick={handleSubmit}
              style={{ background: "#7c3aed", color: "white" }}
            >
              <i className="fas fa-paper-plane me-2"></i>
              Assign to Students
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AssignmentForm;
