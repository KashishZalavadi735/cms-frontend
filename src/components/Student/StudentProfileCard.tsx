"use client";

import { getProfile } from "@/services/studentService";
import { Profile } from "@/types/type";
import { useEffect, useState } from "react";

// Initial function
const getInitials = (name: string) => {
  return name.split(" ").slice(0,2).map((word) => word.charAt(0)).join("").toUpperCase();
};

function StudentProfileCard() {
  // Profile stats
  const [profile, setProfile] = useState<Profile | null>(null);

  // Loading stats
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcProfile = async () => {
      try {
        const data = await getProfile();
        console.log("Profile fetched: ", data);
        setProfile(data);
      } catch (error:any) {
        console.error("Failed to fetch profile: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetcProfile();
  },[]);

  if (Loading) return <div>Loading Profile...</div>

  if (!profile) return null;

  return (
    <div className="card border-0 shadow-sm rounded-4 cardAnimation">
      <div className="card-body p-4">
        {/* Header */}
        <div className="d-flex align-items-center gap-4 mb-4">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold bg-primary"
            style={{ height: "80px", width: "80px", fontSize: "28px" }}
          >
            {getInitials(profile.name)}
          </div>

          <div>
            <h4 className="fw-bold mb-1">{profile.name}</h4>
            <p className="text-muted mb-2">{profile.email}</p>

            <div className="d-flex gap-2">
              <span
                className="badge text-uppercase rounded-pill px-3 py-2"
                style={{ color: "#7c3aed", background: "#f3e8ff" }}
              >
                {profile.role.enumValue}
              </span>
              <span className="badge text-uppercase rounded-pill px-3 py-2 text-primary bg-primary-subtle">
                Academic User
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Student Id</label>
              <input
                type="text"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={profile.code}
                readOnly
              />
            </div>

            <div className="col-md-6 mb-1">
              <label className="form-label fw-medium mb-2">Full Name</label>
              <input
                type="text"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={profile.name}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Email Address</label>
              <input
                type="email"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={profile.email}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Mobile Number</label>
              <input
                type="tel"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={profile.contactNumber}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Semester</label>
              <input
                type="text"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={profile.semester.enumValue}
                readOnly
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Year</label>
              <input
                type="text"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={profile.year.enumValue}
                readOnly
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Branch</label>
              <input
                type="text"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={profile.branch.enumValue}
                readOnly
              />
            </div>
          </div>

          {/* Change Password */}
          <h5 className="fw-semibold mt-4 mb-3">Change Password</h5>

          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">New Password</label>
              <input
                type="password"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Enter new password"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Confirm new password"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end gap-3 mt-4">
            <button
              type="button"
              className="btn btn-outline-secondary py-2 px-4"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary py-2 px-4">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentProfileCard;