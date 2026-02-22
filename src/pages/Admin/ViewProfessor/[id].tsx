"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProfessorById } from "@/services/adminService";
import { ProfessorListData } from "@/types/type";

function ViewProfessor() {
  const router = useRouter();
  const { id } = router.query;

  // Professor stats
  const [professorData, setProfessorData] = useState<ProfessorListData | null>(
    null,
  );

  // Loading stats
  const [loading, setLoading] = useState(true);

  // Fetch professor details
  useEffect(() => {
    const fetchProfessorDetails = async () => {
      try {
        if (!id) return;
        
        const data = await getProfessorById(Number(id));
        console.log("Professor details: ", data);

        setProfessorData(data);
      } catch (error) {
        console.error("Error fetching Professor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessorDetails();
  }, [id]);

  return (
    <div className="mx-4 py-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold fs-3 mb-0"> Professor Profile</h3>
        <p className="fs-6 text-muted">
          Here is your professor's complete academic and contact information
        </p>
      </div>

      <div className="container-fluid py-3">
        <div className="card border-0 shadow-sm rounded-4 cardAnimation">
          <div className="card-body p-4">
            {loading ? (
              <h5>Loading details...</h5>
            ) : (
              <>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Professor ID</p>
                      <h6 className="fw-semibold mb-0">
                        {professorData?.code}
                      </h6>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Full Name</p>
                      <h6 className="fw-semibold mb-0">
                        {professorData?.name}
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Email</p>
                      <h6 className="fw-semibold mb-0">
                        {professorData?.email}
                      </h6>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Contact No</p>
                      <h6 className="fw-semibold mb-0">
                        {professorData?.contactNumber}
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Branch</p>
                      <h6 className="fw-semibold mb-0">
                        {professorData?.branch.enumValue}
                      </h6>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 border rounded-3 h-100">
                      <p className="text-muted mb-1">Status</p>
                      <h6
                        className={`fw-semibold mb-0 ${professorData?.status.enumValue === "Active" ? "text-success" : "text-danger"}`}
                      >
                        {professorData?.status.enumValue}
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="p-3 border rounded-3 h-100 mb-4">
                  <p className="text-muted mb-3">Assigned Subjects</p>

                  {professorData?.professorSubjects.length ? (
                    <div className="d-flex flex-wrap gap-2">
                      {professorData.professorSubjects.map((ps) => (
                        <span
                          key={ps.id}
                          className="badge bg-light text-dark border fs-6 px-3 py-2 rounded-pill"
                        >
                          {ps.subject.name}
                          {ps.subject.semester && (
                            <span className="text-muted ms-1">
                              ({ps.subject.semester.enumValue})
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted fw-bold mb-0">
                      No subjects assigned
                    </p>
                  )}
                </div>
              </>
            )}
            {/* Action */}
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
};

export default ViewProfessor;
