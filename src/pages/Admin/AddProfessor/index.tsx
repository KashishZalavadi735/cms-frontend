import { useEffect, useState } from "react";
import { RecentProfessor } from "@/types/type";
import { getProfessorSummary } from "@/services/adminService";
import AddProfessorForm from "@/components/Admin/AddProfessorForm";
import RecentProfessors from "@/components/Admin/RecentProfessors";
import TotalProfessorCard from "@/components/Admin/TotalProfessorCard";

function AddProfessor() {
  // Loading state
  const [loading, setLoading] = useState(true);

  // Recent Professor state
  const [recentProfessor, setRecentProfessor] = useState<RecentProfessor[]>([]);

  // Total Professor state
  const [totalProfessor, setTotalProfessor] = useState(0);

  // Branch name state
  const [branchName, setBranchName] = useState("");

  // Total subjects state
  const [totalSubjects, setTotalSubjects] = useState(0);

  // Fetch professor summary
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const data = await getProfessorSummary();
        console.log("Professor summary: ", data);
        setRecentProfessor(data.recentProfessors);
        setTotalProfessor(data.totalProfessors);
        setBranchName(data.branchName);
        setTotalSubjects(data.totalSubjects);
      } catch (error: any) {
        console.error("Failed to fetch professor summary: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">Add Professor</h3>
        <p className="fs-6 text-muted">Add new professor to your department</p>
      </div>

      <div className="container-fluid py-3">
        <div className="row g-4">
          {/* Left */}
          <div className="col-lg-8 col-12">
            <AddProfessorForm />
          </div>

          {/* Right */}
          <div className="col-lg-4 col-12">
            <RecentProfessors professors={recentProfessor} loading={loading} />
            <TotalProfessorCard
              totalProfessor={totalProfessor}
              branchName={branchName}
              totalSubjects={totalSubjects}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProfessor;
