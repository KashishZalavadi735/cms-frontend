"use client";

import UpdateProfessorForm from "@/components/Admin/UpdateProfessorForm";

function UpdateProfessor() {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Update Professor</h4>
          <small>Update Professor of your department in your college</small>
        </div>
      </div>

      <UpdateProfessorForm />
    </div>
  );
}

export default UpdateProfessor;