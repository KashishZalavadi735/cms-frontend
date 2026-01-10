"use client";

import { useRouter } from "next/router";

function StudentList() {
  const router = useRouter();

  return (
    <div className="card border-0 shadow-sm rounded-4 table-responsive cardAnimation">
      <div className="card-body p-4">
        <table className="table align-middle">
          <thead>
            <tr className="text-uppercase">
              <th>Studnet Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Semester</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>STUD_101</td>
              <td>Divya Patil</td>
              <td>divya123@gmail.com</td>
              <td>9752136842</td>
              <td>4</td>
              <td>SY</td>
            </tr>
            <tr>
              <td>STUD_102</td>
              <td>Kinjal Patil</td>
              <td>kp123@gmail.com</td>
              <td>7852149632</td>
              <td>1</td>
              <td>FY</td>
            </tr>
            <tr>
              <td>STUD_103</td>
              <td>Pooja Patil</td>
              <td>poojap123@gmail.com</td>
              <td>7896541236</td>
              <td>6</td>
              <td>TY</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-3 text-end">
          <button
            className="btn btn-outline-secondary px-4 py-2 rounded-3"
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
