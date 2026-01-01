"use client";

import { useRouter } from "next/router";

function ProfessorsList() {
  const router = useRouter();

  const handleView = () => {
    router.push(`/Professors/ViewProfessor`)
  }

  const handleEdit = () => {
    router.push(`/Professors/UpdateProfessor`)
  };

  return (
    <div className="my-4">
      <div className="card p-4 shadow-sm border-0 table-responsive">
        <table className="table align-middle">
          <thead>
            <tr className="text-muted small">
              <th>Professor_ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>CONTACT NO</th>
              <th>SUBJECT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PROF_101</td>
              <td>Sakshi Zala</td>
              <td>sakshizala123@gmail.com</td>
              <td>9752136842</td>
              <td>Programming Fundamentals</td>
              <td style={{ cursor: "pointer" }}>
                <i className="bi bi-eye text-primary" aria-hidden="true" onClick={handleView}></i>
                <i
                  className="bi bi-pencil-square text-info mx-3"
                  aria-hidden="true"
                  onClick={handleEdit}
                ></i>
                <i className="bi bi-trash text-danger" aria-hidden="true"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProfessorsList