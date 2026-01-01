"use client";

import AddProfessorForm from "@/components/Admin/AddProfessorForm";

function AddProfessor() {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Add Professor</h4>
          <small>Add all Professor of your department in your college</small>
        </div>
      </div>

      <AddProfessorForm />
    </div>
  );
}

export default AddProfessor;