"use client";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getEnumByType } from "@/services/enumService";
import { getAdminById, updateAdmin } from "@/services/superAdminService";
import { AdminData, EnumOption } from "@/types/type";

function UpdateAdminForm() {
  const router = useRouter();
  const { id } = router.query;

  // Loading
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState<Partial<AdminData>>({});

  // Branch state
  const [branches, setBranches] = useState<EnumOption[]>([]);

  // Form data state
  const [formData, setFormData] = useState<AdminData>({
    name: "",
    email: "",
    contactNumber: "",
    branchValue: "",
    statusId: "",
  });

  // Fetch branches
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const data = await getEnumByType("BRANCH");
        setBranches(data);
      } catch (error: any) {
        console.error("Failed to load branches", error);
      }
    };

    fetchBranches();
  }, []);

  // Fetch admin data
  useEffect(() => {
    if (!id) return;

    const fetchAdmin = async () => {
      try {
        if (!id || Array.isArray(id)) return;

        const data = await getAdminById(id);

        setFormData({
          name: data.name ?? "",
          email: data.email ?? "",
          contactNumber: data.contactNumber ?? "",
          branchValue: data.branch?.enumValue ?? "",
          statusId: data.status?.id ?? 25,
        });
      } catch (error: any) {
        console.error("Failed to fetch admin details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, [id]);

  // Validate a single field
  const validateField = (name: keyof AdminData, value: string) => {
    let error: string | undefined;

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;

      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim()))
          error = "Invalid email format";
        break;

      case "contactNumber":
        if (value && !/^\d{10,15}$/.test(value.trim()))
          error = "Invalid contact number";
        break;

      case "branchValue":
        if (!value.trim()) error = "Branch is required";
        break;
    }

    setError((prev) => ({ ...prev, [name]: error }));
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors: Partial<AdminData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Minimum 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.contactNumber && !/^[0-9]{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be 10 digits";
    }

    if (!formData.branchValue.trim()) {
      newErrors.branchValue = "Branch is required";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof AdminData, value);
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix validation errors");
      return;
    }

    try {
      if (!id || Array.isArray(id)) return;
      const response = await updateAdmin(id, {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        branchValue: formData.branchValue,
        statusId: formData.statusId,
      });
      console.log("Admin updated: ", response);

      toast.success("Admin updated successfully!");

      router.push("/SuperAdmin/ManageAdmin");
    } catch (error: any) {
      console.error("Error updating admin: ", error);
      toast.error("Error updating admin.");
    }
  };

  if (loading) {
    return <h5 className="text-center mt-4">Loading admin details...</h5>;
  }

  return (
    <div className="card border-0 shadow-sm rounded-4 cardAnimation">
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                className={`form-control px-4 py-3 w-100 rounded-3 ${error.name ? "is-invalid" : ""}`}
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
              />
              {error.name && (
                <div className="invalid-feedback">{error.name}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                className={`form-control px-4 py-3 w-100 rounded-3 ${error.email ? "is-invalid" : ""}`}
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
              {error.email && (
                <div className="invalid-feedback">{error.email}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Mobile Number</label>
              <input
                type="tel"
                name="contactNumber"
                className={`form-control px-4 py-3 w-100 rounded-3 ${error.contactNumber ? "is-invalid" : ""}`}
                placeholder="Enter mobile number"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              {error.contactNumber && (
                <div className="invalid-feedback">{error.contactNumber}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Branch</label>
              <select
                name="branchValue"
                value={formData.branchValue}
                onChange={handleChange}
                className={`form-select px-4 py-3 w-100 rounded-3 ${error.branchValue ? "is-invalid" : ""}`}
              >
                <option value="">Select Branch</option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.enumValue}>
                    {branch.enumValue}
                  </option>
                ))}
              </select>
              {error.branchValue && (
                <div className="invalid-feedback">{error.branchValue}</div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button
              type="button"
              className="btn btn-outline-secondary px-4 py-2 rounded-3"
              onClick={() => router.back()}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary px-4 rounded-3">
              <i className="fas fa-user-plus me-2"></i>
              Update Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateAdminForm;
