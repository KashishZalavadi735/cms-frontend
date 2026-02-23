"use client";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProfessorData, Subject } from "@/types/type";
import {
  getBranchSubjects,
  getProfessorById,
  updateProfessor,
  updateProfessorSubjects,
} from "@/services/adminService";

function UpdateProfesssorForm() {
  const router = useRouter();
  const { id } = router.query;

  // Loading stats
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState<Partial<ProfessorData>>({});

  // Subject state
  const [subjects, setSubjects] = useState<Subject[]>([]);

  // Form data state
  const [formData, setFormData] = useState<ProfessorData>({
    name: "",
    email: "",
    contactNumber: "",
    branchValue: "",
    subjectIds: [],
    statusId: "",
  });

  // Fetch professor data
  useEffect(() => {
    if (!id) return;

    const fetchProfessor = async () => {
      try {
        if (!id || Array.isArray(id)) return;

        const [professor, branchSubjects] = await Promise.all([
          getProfessorById(id),
          getBranchSubjects(),
        ]);

        setSubjects(branchSubjects);

        setFormData({
          name: professor.name,
          email: professor.email,
          contactNumber: professor.contactNumber || "",
          branchValue: professor.branch?.enumValue || "",
          subjectIds: professor.subjects?.map((s: any) => s.subjectId) || [],
          statusId: professor.statusId,
        });
      } catch (error: any) {
        toast.error("Failed to load professor data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfessor();
  }, [id]);

  // Validate a single field
  const validateField = (name: keyof ProfessorData, value: string) => {
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

  // Validate entire form before submit
  const validateForm = () => {
    const newErrors: Partial<ProfessorData> = {};

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

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    validateField(name as keyof ProfessorData, value);
  };

  // Multi subject select
  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(e.target.selectedOptions).map(
      (opt) => opt.value,
    );
    setFormData((prev) => ({ ...prev, subjectIds: selectedIds }));
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
      
      // Update professor info
      const ProfessorResponse = await updateProfessor(id, {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        statusId: formData.statusId,
      });

      // Update professor subjects
      const SubjectResponse = await updateProfessorSubjects(id, {
        subjectIds: formData.subjectIds,
      });

      // Combine Response
      const response = {
        professor: ProfessorResponse,
        subjects: SubjectResponse,
      };
      console.log("Professor updated:", response);

      toast.success("Professor updated successfully!");
      router.push("/Admin/ManageProfessor");
    } catch (error: any) {
      console.error("Error updating professor: ", error);
      toast.error("Error updating professor.");
    }
  };

  if (loading) {
    return <h5 className="text-center mt-4">Loading professor details...</h5>;
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
              <input
                name="branchValue"
                className="form-select px-4 py-3 w-100 rounded-3"
                value={formData.branchValue}
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
              Update Professor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfesssorForm;
