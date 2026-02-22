"use client";

import { getEnumByType } from "@/services/enumService";
import { createAdmin } from "@/services/superAdminService";
import { AdminData, EnumOption } from "@/types/type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AddAdminForm() {
  const router = useRouter();

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
    statusId: 25,
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

  // Validate a single field
  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.length < 3) error = "Minimum 3 characters";
        break;

      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(value))
          error = "Enter a valid email address";
        break;

      case "contactNumber":
        if (value && !/^[0-9]{10}$/.test(value))
          error = "Contact number must be 10 digits";
        break;

      case "branchValue":
        if (!value) error = "Branch is required";
        break;
    }

    setError((prev) => ({ ...prev, [name]: error }));
  };

  // Handle Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    validateField(name, value);
  };

  // Validate entire form before submit
  const validateForm = () => {
    const newErrors: Partial<AdminData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.contactNumber && !/^[0-9]{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be 10 digits";
    }

    if (!formData.branchValue) {
      newErrors.branchValue = "Branch is required";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix validation errors");
      return;
    }

    try {
      const response = await createAdmin(formData);
      console.log("Admin created: ", response);

      toast.success("Admin added successfully!");

      router.push("/SuperAdmin/CreateAdmin");
    } catch (error: any) {
      console.error("Error creating admin: ", error);
      toast.error("Error creating admin.");
    }
  };

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

          {/* Login Info */}
          <div className="mt-4">
            <h6 className="fw-semibold mb-2">Login Credentials</h6>
            <div
              className="text-primary p-3 rounded-3 mb-0"
              style={{
                backgroundColor: "#eff6ff",
                border: "1px solid #bfdbfe",
              }}
            >
              Login credentials will be automatically generated and sent to the
              HOD's email address.
              <br />
              The HOD will receive an email with temporary password and login
              instructions.
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
              Create Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAdminForm;
