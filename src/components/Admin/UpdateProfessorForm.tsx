"use client";

import { useRouter } from "next/router";
import toast from "react-hot-toast";

function UpdateProfessorForm() {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/Dashboard");
  };

  const handleSubmit = () => {
    toast.success("Professor updated successfully!");
    router.push("/Dashboard");
  };

  return (
    <div className="my-4">
      <div className="card p-4 shadow-sm border-0">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h5>Basic Information</h5>
            <div className="row">
              <div className="col-12 col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <label className="form-label">Contact No</label>
                <input type="tel" className="form-control" />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Branch</label>
                <select className="form-select">
                  <option value="">Computer</option>
                  <option value="">Mechanical</option>
                  <option value="">Electrical</option>
                  <option value="">Civil</option>
                  <option value="">Chemical</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <label className="form-label">Subject </label>
                <select className="form-select">
                  <option value="">Computer</option>
                  <option value="">Mechanical</option>
                  <option value="">Electrical</option>
                  <option value="">Civil</option>
                  <option value="">Chemical</option>
                </select>
              </div>
            </div>


          </div>

          <div className="d-flex justify-content-center gap-2">
            <button type="submit" className="btn btn-custom">
              Update Professor
            </button>
            <button
              type="button"
              className="btn btn-outline-custom"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfessorForm