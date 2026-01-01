"use client";

import UpdateAssignmentForm from '@/components/Professor/UpdateAssignmentForm';

function UpdateAssignments() {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Update Assignments</h4>
          <small>Update the details of an existing assignment</small>
        </div>
      </div>

      <UpdateAssignmentForm />
    </div>
  )
}

export default UpdateAssignments