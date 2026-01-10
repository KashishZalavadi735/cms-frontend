function AcSecCard() {
  return (
    <div
      className="card border-0 rounded-4 text-white cardAnimation"
      style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
    >
      <div className="card-body p-4">
        <h5>Account Security</h5>
        <p className="small mb-4">Last login: Today at 09:42 AM</p>

        {/* Item */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center gap-3">
            <i className="fas fa-shield-halved"></i>
            <span className="fw-medium">Two-factor authentication</span>
          </div>
          <span className="badge bg-light text-primary px-3 py-2">Enabled</span>
        </div>

        {/* Item */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center gap-3">
            <i className="fas fa-lock"></i>
            <span className="fw-medium">Password last changed</span>
          </div>
          <span className="fw-medium">15 days ago</span>
        </div>

        {/* Item */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center gap-3">
            <i className="fas fa-sync-alt"></i>
            <span className="fw-medium">Login activity</span>
          </div>
          <a href="#" className="text-white fw-semibold text-decoration-none">
            View
          </a>
        </div>

        {/* Button */}
        <button className="btn btn-light w-100 fw-semibold text-primary rounded-3">Security Settings</button>
      </div>
    </div>
  );
}

export default AcSecCard;
