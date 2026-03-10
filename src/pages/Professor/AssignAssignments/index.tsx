import AssignmentForm from "@/components/Shared/AssignmentForm";
import AssignmentsSummaryCard from "@/components/Shared/AssignmentsSummaryCard";
import RecentAssignments from "@/components/Shared/RecentAssignments";
import { getAssignmentSummary } from "@/services/assignmentService";
import { RecentAssignment } from "@/types/type";
import { useEffect, useState } from "react";

function AssignAssignments() {
  // Loading state
  const [loading, setLoading] = useState(true);

  // Recent assignment state
  const [recentAssignment, setRecentAssignment] = useState<RecentAssignment[]>(
    [],
  );

  // Total assignment state
  const [totalAssignment, setTotalAssignment] = useState(0);

  // Active assignment state
  const [activeAssignment, setActiveAssignment] = useState(0);

  // Due this week assignment state
  const [dtwAssignment, setDtwAssignment] = useState(0);

  // Fetch assignment summary
  useEffect(() => {
    const storedSummary = sessionStorage.getItem("assignmentSummary");

    if (storedSummary) {
      const data = JSON.parse(storedSummary);

      setRecentAssignment(data.recentAssignment);
      setTotalAssignment(data.total);
      setActiveAssignment(data.active);
      setDtwAssignment(data.dueThisWeek);
      setLoading(false);

      return;
    }

    const fetchSummary = async () => {
      try {
        const data = await getAssignmentSummary();
        console.log("Assignment summary: ", data);

        setRecentAssignment(data.recentAssignment);
        setTotalAssignment(data.total);
        setActiveAssignment(data.active);
        setDtwAssignment(data.dueThisWeek);

        sessionStorage.setItem("assignmentSummary", JSON.stringify(data));
      } catch (error: any) {
        console.error("Failed to fetch assignment summary: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">Assign Assignment</h3>
        <p className="fs-6 text-muted">
          Create and assign new assignment to students
        </p>
      </div>

      <div className="container-fluid py-3">
        <div className="row g-4">
          {/* Left */}
          <div className="col-lg-8 col-12">
            <AssignmentForm />
          </div>

          {/* Right */}
          <div className="col-lg-4 col-12">
            <RecentAssignments
              assignments={recentAssignment}
              loading={loading}
            />
            <AssignmentsSummaryCard
              totalAssignment={totalAssignment}
              activeAssignment={activeAssignment}
              dtwAssignment={dtwAssignment}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignAssignments;
