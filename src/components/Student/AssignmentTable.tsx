import Link from "next/link";
import React from "react";

function AssignmentTable() {
  return (
    <div className="card border-0 shadow-sm rounded-4 table-responsive cardAnimation">
      <div className="card-body p-4">
        <table className="table align-middle">
          <thead>
            <tr className="text-uppercase">
              <th>Assignment</th>
              <th>Subject</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Attachment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Assignment 1 */}
            <tr>
              <td>DBMS Normalization</td>
              <td>Database Management Systems</td>
              <td>15 Jan 2026</td>
              <td>
                <span className="badge bg-warning-subtle text-warning">
                  Pending
                </span>
              </td>
              <td>
                <Link href="" className="text-decoration-none">
                  View PDF
                </Link>
              </td>
              <td>
                <select className="form-select form-select-sm">
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </td>
            </tr>

            {/* Assignment 2 */}
            <tr>
              <td>Process Scheduling</td>
              <td>Operating System</td>
              <td>18 Jan 2026</td>
              <td>
                <span className="badge bg-info-subtle text-info">
                  In Progress
                </span>
              </td>
              <td>
                <Link href="" className="text-decoration-none">
                  View PDF
                </Link>
              </td>
              <td>
                <select className="form-select form-select-sm">
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </td>
            </tr>

            {/* Assignment 3 */}
            <tr>
              <td>SQL Queries Practice</td>
              <td>Database Management Systems</td>
              <td>10 Jan 2026</td>
              <td>
                <span className="badge bg-success-subtle text-success">
                  Completed
                </span>
              </td>
              <td>
                <Link href="" className="text-decoration-none">
                  View PDF
                </Link>
              </td>
              <td>
                <button className="btn btn-sm btn-success" disabled>
                  Completed
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssignmentTable;
