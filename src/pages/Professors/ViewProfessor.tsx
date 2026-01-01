"use client";

import { useRouter } from "next/router";

function ViewProfessor() {
  const router = useRouter();

  return (
    <div className="mt-3">
      <h5 className="mb-4">Professor Details</h5>
      <div className="d-flex justify-content-between align-items-center">
        <div className="card p-4 shadow-sm border-0 w-100">
          <div className="row mb-3">
            <div className=" col-md-6">
              <strong>Professor ID:</strong>
              <p>PROF_001</p>
            </div>
            <div className="col-12 col-md-6">
              <strong>Full Name:</strong>
              <p>Kashish Zala</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <strong>Email:</strong>
              <p>kashishzala@gmail.com</p>
            </div>
            <div className="col-12 col-md-6">
              <strong>Contact No:</strong>
              <p>9758426589</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <strong>Branch:</strong>
              <p>gvjhugbhj</p>
            </div>
            <div className="col-12 col-md-6">
              <strong>Subject:</strong>
              <p>gvjh</p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-custom"
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfessor;
