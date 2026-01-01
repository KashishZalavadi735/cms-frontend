"use client";

import ProfessorsList from '@/components/Admin/ProfessorsList'

function ManageProfessors() {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Professors Management</h4>
          <small>Manage all Professor of your department in your college</small>
        </div>
      </div>

      <ProfessorsList />
    </div>
  )
}

export default ManageProfessors