"use client";

import { useRouter } from 'next/router';

function AssignmentsList() {
  const router = useRouter();
  
    const handleView = () => {
      router.push(`/Assignments/ViewAssignement`)
    }
  
    const handleEdit = () => {
      router.push(`/Assignments/UpdateAssignments`)
    };
  
    return (
      <div className="my-4">
        <div className="card p-4 shadow-sm border-0 table-responsive">
          <table className="table align-middle">
            <thead>
              <tr className="text-muted small">
                <th>SR.NO.</th>
                <th>TITLE</th>
                <th>SUBJECT</th>
                <th>DUE DATE</th>
                <th>ATTACHMENT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>njnmnad</td>
                <td>dncf wjend</td>
                <td>12-12-2025</td>
                <td>fsdjnfrw</td>
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

export default AssignmentsList