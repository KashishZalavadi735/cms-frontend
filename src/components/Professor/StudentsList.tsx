"use client";

import { useRouter } from 'next/router';

function StudentsList() {
    const router = useRouter();

    const handleView = () => {
    router.push(`/Students/ViewStudentDetails`)
  }

  return (
    <div className="my-4">
      <div className="card p-4 shadow-sm border-0 table-responsive">
        <table className="table align-middle">
          <thead>
            <tr className="text-muted small">
              <th>Student_ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>SEMESTER</th>
              <th>YEAR</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>STUD_101</td>
              <td>Sakshi Zala</td>
              <td>sakshizala123@gmail.com</td>
              <td>5</td>
              <td>TY</td>
              <td style={{ cursor: "pointer" }}>
                <i className="bi bi-eye text-primary" aria-hidden="true" onClick={handleView}></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentsList