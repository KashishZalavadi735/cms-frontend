"use client";

import StudentsList from "@/components/Professor/StudentsList";

function Students() {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Student's List</h4>
          <small>Here is your students list in branch</small>
        </div>
      </div>

      <StudentsList />
    </div>
  )
}

export default Students