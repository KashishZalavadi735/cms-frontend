"use client";

import { useRouter } from "next/router";

function ViewAssignement() {
    const router = useRouter();
    
  return (
    <div className="mt-3">
      <h5 className="mb-4">Assignment Details</h5>
      <div className="d-flex justify-content-between align-items-center">
        <div className="card p-4 shadow-sm border-0 w-100">
          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <strong>Title:</strong>
              <p>djhwgbvhcesdwjc,bnkisdew</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <strong>Description:</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure asperiores nulla explicabo quisquam, placeat praesentium, magnam quidem, neque non facere tempora cum minima nobis ratione porro! Autem rem itaque iste.</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <strong>Subject:</strong>
              <p>gvjhugbhj</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <strong>Due Date:</strong>
              <p>12-12-2025</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <strong>Attachment (PDF/Image):</strong>
              <p>dcbhdbksbhkdnw.pdf /wnejwndw245jnlkoerd.jpg</p>
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
  )
}

export default ViewAssignement