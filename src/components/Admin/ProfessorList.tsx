"use client";

import { useRouter } from "next/router";


function ProfessorList() {
  const router = useRouter();

  const handleView = () => {
    router.push(`/Admin/ViewProfessor`);
  };

  const handleEdit = () => {
    router.push(`/Admin/UpdateProfessor`);
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 table-responsive cardAnimation">
      <div className="card-body p-4">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>PROFESSOR_ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>CONTACT NO</th>
              <th>BRANCH</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PROF_101</td>
              <td>Riddhi Pawar</td>
              <td>rspawar123@gmail.com</td>
              <td>9752136842</td>
              <td>Computer Engineering</td>
              <td style={{ cursor: "pointer" }}>
                <i
                  className="fas fa-eye text-primary"
                  aria-hidden="true"
                  onClick={handleView}
                ></i>
                <i
                  className="fas fa-pencil-square text-info mx-3"
                  aria-hidden="true"
                  onClick={handleEdit}
                ></i>
                <i className="fas fa-trash text-danger" aria-hidden="true"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfessorList;