"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createProfessor, getBranchSubjects } from "@/services/adminService";
import { EnumOption, ProfessorData, Subject } from "@/types/type";
import { getUserFromToken } from "@/utils/getUserFromToken";
import { getEnumByType } from "@/services/enumService";

function AddProfessorForm() {
  const router = useRouter();

  // Error state
  const [error, setError] = useState<Partial<ProfessorData>>({});

  // Subject state
  const [subjects, setSubjects] = useState<Subject[]>([]);

  // Branch (readonly)
  const [branchName, setBranchName] = useState("");

  // Form data state
  const [formData, setFormData] = useState<ProfessorData>({
    name: "",
    email: "",
    contactNumber: "",
    branchValue: "",
    subjectIds: [],
    statusId: 25,
  });

  // Load branch
  useEffect(() => {
    const loadBranch = async () => {
      const user = getUserFromToken();
      if (!user?.branchId) return;

      try {
        const branches = await getEnumByType("BRANCH");
        const branch = branches.find((b: EnumOption) => b.id === user.branchId);

        if (branch) {
          setBranchName(branch.enumValue);
          setFormData((prev) => ({
            ...prev,
            branchValue: branch.enumValue,
          }));
        }
      } catch (error: any) {
        toast.error("Failed to load branch");
      }
    };

    loadBranch();
  }, []);

  // Load subjects
  useEffect(() => {
    const loadSubjects = async () => {
      try {
        const data = await getBranchSubjects();
        setSubjects(data);
      } catch {
        toast.error("Failed to load subjects");
      }
    };

    loadSubjects();
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

  // Multi subject select
  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(e.target.selectedOptions).map((opt) =>
      Number(opt.value),
    );
    setFormData((prev) => ({ ...prev, subjectIds: selectedIds }));
  };

  // Validate entire form before submit
  const validateForm = () => {
    const newErrors: Partial<ProfessorData> = {};

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
      const response = await createProfessor(formData);
      console.log("Professor created: ", response);

      toast.success("Professor added successfully!");
      router.push("/Admin/AddProfessor");
    } catch (error: any) {
      console.error("Error creating Professor: ", error);
      toast.error("Error creating Professor.");
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
                className={`form-control px-4 py-3 w-100 rounded-3 ${error.name ? "is-invalid" : ""}`}
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
                className={`form-control px-4 py-3 w-100 rounded-3 ${error.name ? "is-invalid" : ""}`}
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
              <input
                className="form-select px-4 py-3 w-100 rounded-3"
                value={branchName || ""}
                readOnly
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">
                Select Subjects
              </label>
              <select
                multiple
                className="form-select px-4 py-3 w-100 rounded-3"
                style={{ height: "10mn 0px" }}
                value={formData.subjectIds.map(String)}
                onChange={handleSubjectChange}
              >
                {subjects.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.name} — {sub.semester.enumValue}
                  </option>
                ))}
              </select>
              <small className="text-muted">
                Hold Ctrl/Cmd to select multiple subjects
              </small>
            </div>
          </div>

          {/* Login Info */}
          <div className="mt-4">
            <h6 className="fw-semibold mb-2">Credentials Information</h6>
            <div
              className="text-success p-3 rounded-3 mb-0"
              style={{
                backgroundColor: "#dcfce7",
                border: "1px solid #86efac",
              }}
            >
              Professor will receive login credentials via email with assigned
              subjects.
              <br />
              Temporary password will be generated automatically.
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
            <button type="submit" className="btn btn-success px-4 rounded-3">
              <i className="fas fa-chalkboard-teacher me-2"></i>
              Add Professor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProfessorForm;
