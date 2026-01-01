"use client";

import AddAssignmentForm from '@/components/Professor/AddAssignmentForm';

function AddAssignments() {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Add Assignment</h4>
          <small>Fill in the details to add a new assignment</small>
        </div>
      </div>

      <AddAssignmentForm />
    </div>
  )
}

export default AddAssignments