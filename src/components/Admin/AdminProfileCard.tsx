"use client";

import { getProfile, updateProfile } from "@/services/adminService";
import { Profile } from "@/types/type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Initial function
const getInitials = (name: string) => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};

function AdminProfileCard() {
  // Profile stats
  const [profile, setProfile] = useState<Profile | null>(null);

  // Loading stats
  const [loading, setLoading] = useState(true);

  // Editable fields
  // Name stats
  const [name, setName] = useState("");

  // Email stats
  const [email, setEmail] = useState("");

  // Contact number stats
  const [contactNumber, setContactNumber] = useState("");

  // Password fields
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fetch profile
  useEffect(() => {
    const storedProfile = sessionStorage.getItem("adminProfile");

    if (storedProfile) {
      const data = JSON.parse(storedProfile);

      setProfile(data);
      setName(data.name);
      setEmail(data.email);
      setContactNumber(data.contactNumber);
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        console.log("Profile fetched: ", data);

        const profileData = {
          ...data,
          role: data.role ?? { enumValue: "N/A" },
          branch: data.branch ?? { enumValue: "Not Assigned" },
        };

        setProfile(profileData);
        setName(data.name);
        setEmail(data.email);
        setContactNumber(data.contactNumber);

        sessionStorage.setItem("adminProfile", JSON.stringify(profileData));
      } catch (error: any) {
        console.error("Failed to fetch profile: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle save
  const handleSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !contactNumber.trim()) {
      return toast.error("All fields are required");
    }

    // Password validation (optional)
    if (newPassword || confirmPassword) {
      if (newPassword !== confirmPassword) {
        return toast.error("Passwords do not match");
      }
      if (newPassword.length < 6) {
        return toast.error("Password must be at least 6 characters");
      }
    }

    try {
      const data = await updateProfile({
        name,
        email,
        contactNumber,
        newPassword: newPassword || undefined,
      });
      console.log("Profile updated: ", data);

      const updatedProfile = {
        ...data,
        role: data.role ?? profile?.role ?? { enumValue: "N/A" },
        branch: data.branch ?? profile?.branch ?? { enumValue: "Not Assigned" },
      };

      setProfile(updatedProfile);

      sessionStorage.setItem("adminProfile", JSON.stringify(updatedProfile));

      toast.success("Profile updated successfully !");

      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  if (loading) return <div>Loading Profile...</div>;

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
                Head of Department
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSaveChanges}>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Admin Id</label>
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
                name="name"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Mobile Number</label>
              <input
                type="tel"
                name="contactNumber"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
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
                name="newPassword"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
  );
}

export default AdminProfileCard;
