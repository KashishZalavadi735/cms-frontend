"use client";

import { useRouter } from "next/router";
import toast from "react-hot-toast";

function UpdateAssignmentForm() {
  const router = useRouter();

  const handleSubmit = () => {
    toast.success("Assignment updated successfully!");
    router.push("/Dashboard");
  };

  return (
    <div className="my-4">
      <div className="card p-4 shadow-sm border-0">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h5>Basic Information</h5>
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Description</label>
                <textarea rows={2} className="form-control"></textarea>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Subject</label>
                <select className="form-select">
                  <option value="">Select Subject</option>
                  <option value="Computer">Computer</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Civil">Civil</option>
                  <option value="Chemical">Chemical</option>
                </select>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Due Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Attachment (PDF/Image)</label>
                <input type="file" accept=".pdf, image/*" className="form-control" />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-2">
            <button type="submit" className="btn btn-custom">
              Update Assignment
            </button>
            <button
              type="button"
              className="btn btn-outline-custom"
              onClick={() => router.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateAssignmentForm