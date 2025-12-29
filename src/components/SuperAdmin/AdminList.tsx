"use client";

import "bootstrap-icons/font/bootstrap-icons.css";

function AdminList() {
  return (
    <div className="my-4">
      <div className="card p-4 shadow-sm border-0 table-responsive">
        <table className="table align-middle">
          <thead>
            <tr className="text-muted small">
              <th>ADMIN_ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>CONTACT NO</th>
              <th>BRANCH</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HOD_101</td>
              <td>Hirav Patel</td>
              <td>hiravpatel123@gmail.com</td>
              <td>9752136842</td>
              <td>Engineering</td>
              <td style={{ cursor: "pointer" }}>
                <i className="bi bi-eye text-primary" aria-hidden="true"></i>
                <i
                  className="bi bi-pencil-square text-info mx-3"
                  aria-hidden="true"
                ></i>
                <i className="bi bi-trash text-danger" aria-hidden="true"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminList;
