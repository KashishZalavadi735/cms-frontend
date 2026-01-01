"use client";

import AssignmentsList from '@/components/Professor/AssignmentsList';

function ManageAssignments() {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Assignments</h4>
          <small>Manage all assignments in your branch</small>
        </div>
      </div>

      <AssignmentsList />
    </div>
  )
}

export default ManageAssignments