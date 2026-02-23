"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  createAssignment,
  getSubjectsForAssignment,
} from "@/services/assignmentService";
import { getEnumByType } from "@/services/enumService";
import { AssignmentData, EnumOption } from "@/types/type";
import { getUserFromToken } from "@/utils/getUserFromToken";

function AssignmentForm() {
  const router = useRouter();

  // Semester state
  const [semesters, setSemesters] = useState<EnumOption[]>([]);

  // Subject state
  const [subjects, setSubjects] = useState<any[]>([]);

  // Branch state
  const [branchName, setBranchName] = useState("");

  // File state
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form data state
  const [formData, setFormData] = useState<AssignmentData>({
    title: "",
    description: "",
    dueDate: "",
    subjectId: "",
    semesterId: "",
  });

  // Fetch Semester
  useEffect(() => {
    const fetchSemesters = async () => {
      try {
        const data = await getEnumByType("SEMESTER");
        setSemesters(data);
      } catch (error: any) {
        console.error("Failed to load semesters", error);
      }
    };

    fetchSemesters();
  }, []);

  // Fetch branch
  useEffect(() => {
    const loadBranch = async () => {
      const user = getUserFromToken();
      if (!user?.branchId) return;

      const branches = await getEnumByType("BRANCH");
      const branch = branches.find((b: EnumOption) => b.id === user.branchId);

      if (branch) setBranchName(branch.enumValue);
    };

    loadBranch();
  }, []);

  // Fetch subjects when semester change
  useEffect(() => {
    if (!formData.semesterId) return;

    const fetchSubjects = async () => {
      try {
        const data = await getSubjectsForAssignment(
          formData.semesterId,
        );
        setSubjects(data);
      } catch (error: any) {
        console.error("Failed to load subjects", error);
      }
    };

    fetchSubjects();
  }, [formData.semesterId]);

  // Handle Change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setFileName(e.target.files[0].name);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      dueDate: "",
      subjectId: "",
      semesterId: "",
    });

    setSubjects([]);
    setFileName("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Submit Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const fd = new FormData();
      fd.append("title", formData.title);
      fd.append("description", formData.description);
      fd.append("dueDate", formData.dueDate);
      fd.append("subjectId", formData.subjectId);
      fd.append("semesterId", formData.semesterId);

      if (fileInputRef.current?.files?.[0]) {
        fd.append("attachment", fileInputRef.current.files[0]);
      }

      const response = await createAssignment(fd);
      console.log("Assignment created: ", response);

      toast.success("Assignment added successfully!");

      resetForm();
      
      router.push("/Admin/AssignAssignments");
    } catch (error: any) {
      console.error("Error creating professor: ", error);
      toast.error("Error creating assignment.");
    }
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 cardAnimation">
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          <div className="row mt-1">
            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">
                Assignment Title
              </label>
              <input
                type="text"
                name="title"
                className="form-control px-4 py-3 w-100 rounded-3"
                placeholder="Enter assignment title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Semester</label>
              <select
                name="semesterId"
                className="form-select px-4 py-3 w-100 rounded-3"
                value={formData.semesterId}
                onChange={handleChange}
              >
                <option value="">Select Semester</option>
                {semesters.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.enumValue}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Subjects</label>
              <select
                name="subjectId"
                className="form-select px-4 py-3 w-100 rounded-3"
                value={formData.subjectId}
                onChange={handleChange}
              >
                <option value="">Select Subject</option>
                {subjects.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-medium mb-2">Branch</label>
              <input
                className="form-select px-4 py-3 w-100 rounded-3"
                value={branchName}
                readOnly
              />
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-12">
              <label className="form-label fw-medium mb-2">Due Date</label>
              <input
                type="date"
                name="dueDate"
                className="form-control px-4 py-3 w-100 rounded-3"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-1">
            <label className="form-label fw-medium mb-2">Description</label>
            <textarea
              name="description"
              className="form-select px-4 py-3 w-100 rounded-3"
              rows={4}
              placeholder="Enter assignment description and instructions"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="mt-1">
            <label className="form-label fw-medium mb-2">
              Attachment (PDF/Image)
            </label>
            <div
              className="rounded-4 p-4 text-center"
              style={{ border: "2px dashed #cfd4dc", cursor: "pointer" }}
              onClick={() => fileInputRef.current?.click()}
            >
              <i className="fas fa-cloud-upload fs-2 text-muted"></i>

              {/* Show this ONLY when no file selected */}
              {!fileName && (
                <>
                  <p className="mb-1 text-muted fw-medium">
                    Drag & drop files here or{" "}
                    <span className="text-primary">browse</span>
                  </p>
                  <small className="text-muted">
                    Supported formats: PDF, JPG, PNG (Max 10MB)
                  </small>
                </>
              )}

              {/* Show this ONLY after file selected */}
              {fileName && (
                <p className="mt-2 fw-medium">
                  <b>Selected file:</b> {fileName}
                </p>
              )}

              {/* Hidden Input */}
              <input
                ref={fileInputRef}
                type="file"
                className="d-none"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="d-flex justify-content-end gap-3 mt-4">
            <button
              type="button"
              className="btn btn-outline-secondary px-4 py-2 rounded-3"
              onClick={() => router.back()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn px-4 rounded-3"
              style={{ background: "#7c3aed", color: "white" }}
            >
              <i className="fas fa-paper-plane me-2"></i>
              Assign to Students
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AssignmentForm;
