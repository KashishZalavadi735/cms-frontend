"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ViewStudents } from "@/services/branchStudent";
import { StudentListData, StudentProps } from "@/types/type";

function StudentList({ search }: StudentProps) {
  const router = useRouter();

  // Students stats
  const [students, setStudents] = useState<StudentListData[]>([]);

  // Loading stats
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch students
  useEffect(() => {
    const cacheKey = `students_page_${page}_search_${search}`;

    const storedStudents = sessionStorage.getItem(cacheKey);

    if (storedStudents) {
      const data = JSON.parse(storedStudents);
      setStudents(data.students);
      setTotalPages(data.totalPages);
      setLoading(false);
      return;
    }

    const fetchStudents = async () => {
      try {
        const data = await ViewStudents(page, limit, search);
        console.log("Students data:", data);

        setStudents(data.students);
        setTotalPages(data.totalPages);

        sessionStorage.setItem(cacheKey, JSON.stringify(data));
      } catch (error: any) {
        console.error("Error fetching students data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [page, search]);

  return (
    <div className="card border-0 shadow-sm rounded-4 table-responsive cardAnimation">
      <div className="card-body p-4">
        {loading ? (
          <h5>Loading Students...</h5>
        ) : (
          <>
            <table className="table align-middle">
              <thead>
                <tr className="text-uppercase">
                  <th>Studnet Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact No</th>
                  <th>Semester</th>
                  <th>Year</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.length > 0 ? (
                  Array.isArray(students) &&
                  students.map((stud) => (
                    <tr key={stud.id}>
                      <td>{stud.code}</td>
                      <td>{stud.name}</td>
                      <td>{stud.email}</td>
                      <td>{stud.contactNumber}</td>
                      <td>{stud.semester.enumValue}</td>
                      <td>{stud.year.enumValue}</td>
                      <td>
                        <span
                          className={`badge rounded-pill px-3 ${stud.status.enumValue === "Active" ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"}`}
                        >
                          {stud.status.enumValue}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center text-muted">
                      No student found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-outline-secondary"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </button>

              <span>
                Page {page} of {totalPages}
              </span>

              <button
                className="btn btn-outline-secondary"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}

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
