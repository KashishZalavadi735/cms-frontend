import UpdateProfesssorForm from '@/components/Admin/UpdateProfesssorForm';

function UpdateProfessor() {
  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">Update Professor</h3>
        <p className="fs-6 text-muted">
          Update professor details to your department
        </p>
      </div>

      <div className="container-fluid py-3">
        <UpdateProfesssorForm />
      </div>
    </div>
  )
}

export default UpdateProfessor;