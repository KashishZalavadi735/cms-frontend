import AddProfessorForm from '@/components/Admin/AddProfessorForm';
import RecentProfessor from '@/components/Admin/RecentProfessor';
import TotalProfessorCard from '@/components/Admin/TotalProfessorCard';

function AddProfessor() {
  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">Add Professor</h3>
        <p className="fs-6 text-muted">
          Add new professor to your department
        </p>
      </div>

      <div className="container-fluid py-3">
        <div className="row g-4">
            
            {/* Left */}
            <div className="col-lg-8 col-12">
                <AddProfessorForm />
            </div>

            {/* Right */}
            <div className="col-lg-4 col-12">
                <RecentProfessor />
                <TotalProfessorCard />
            </div>

        </div>
      </div>
    </div>
  )
}

export default AddProfessor;