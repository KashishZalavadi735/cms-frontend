function AssignmentFilter() {
  return (
    <div className="card border-0 shadow-sm rounded-4 cardAnimation">
      <div className="card-body p-4">
        <div className="row g-3">
          <div className="col-md-6 col-12">
            <label className="form-label fw-medium mb-2">Subject</label>
            <select className="form-select px-4 py-3 w-100 rounded-3">
              <option>All Subjects</option>
              <option>Database Management Systems</option>
              <option>Computer Networks</option>
              <option>Web Technologies</option>
              <option>Machine Learning</option>
            </select>
          </div>
          <div className="col-md-6 col-12">
            <label className="form-label fw-medium mb-2">Status</label>
            <select className="form-select px-4 py-3 w-100 rounded-3">
              <option>All</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Web Technologies</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentFilter;
