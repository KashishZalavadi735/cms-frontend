import AssignmentForm from "@/components/Shared/AssignmentForm";
import AssignmentsSummaryCard from "@/components/Shared/AssignmentsSummaryCard";
import RecentAssignments from "@/components/Shared/RecentAssignments";

function AssignAssignments() {
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
                <RecentAssignments />
                <AssignmentsSummaryCard />
            </div>

        </div>
      </div>
    </div>
  );
}

export default AssignAssignments;