"use client";

import { useRouter } from "next/router";

function ViewProfessor() {
  const router = useRouter();

  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0"> Professor Details</h3>
        <p className="fs-6 text-muted">Here's is your professor details</p>
      </div>

      <div className="container-fluid py-3">
        <div className="card border-0 shadow-sm rounded-4 cardAnimation">
          <div className="card-body p-4">
            <div className="table-responsive border rounded-3">
              <table className="table align-middle">
                <tbody>
                  <tr>
                    <td className="fw-semibold text-uppercase">Professor Id</td>
                    <td colSpan={3}>PROF_101</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-uppercase">Full Name</td>
                    <td>Riddhi Pawar</td>
                    <td className="fw-semibold text-uppercase">Email</td>
                    <td>rspawar123@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-uppercase">Contact No</td>
                    <td>9752136842</td>
                    <td className="fw-semibold text-uppercase">Branch</td>
                    <td>Computer Engineering</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-uppercase">Subjects</td>
                    <td colSpan={3}>
                      Database Management Systems <br />
                      Artificial Intelligence
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

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
      </div>
    </div>
  );
}

export default ViewProfessor;
