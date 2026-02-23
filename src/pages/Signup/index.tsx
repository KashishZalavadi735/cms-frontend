"use client";

import styles from "@/styles/Signup.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { signupService } from "@/services/authService";
import { getEnumByType } from "@/services/enumService";
import { EnumOption, SignupData } from "@/types/type";

function Signup() {
  const router = useRouter();

  // Loading state
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState<SignupData>({
    name: "",
    email: "",
    contactNumber: "",
    password: "",
    branchId: "",
    semesterId: "",
    yearId: "",
  });

  // Branch state
  const [branches, setBranches] = useState<EnumOption[]>([]);

  // Semester state
  const [semesters, setSemesters] = useState<EnumOption[]>([]);

  // Year state
  const [years, setYears] = useState<EnumOption[]>([]);

  // Fetch branches
  useEffect(() => {
    const fetchEnums = async () => {
      try {
        const [branchData, semesterData, yearData] = await Promise.all([
          getEnumByType("BRANCH"),
          getEnumByType("SEMESTER"),
          getEnumByType("YEAR"),
        ]);

        setBranches(branchData);
        setSemesters(semesterData);
        setYears(yearData);
      } catch (error) {
        console.error("Failed to load enums", error);
      }
    };

    fetchEnums();
  }, []);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const responseData = {
        ...formData,
        branchId: formData.branchId,
        semesterId: formData.semesterId,
        yearId: formData.yearId,
      };

      const response = await signupService(responseData);
      console.log("Signup data: ", response);

      toast.success("Signup successfully!");

      router.push("/Login");
    } catch (error: any) {
      console.error("Error to signup: ", error);
      toast.error(error.response.data.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.bgPage}`}
    >
      <div
        className={`card shadow-lg py-5 px-4 rounded-4 ${styles.signupCard}`}
      >
        {/* Icon */}
        <div className="text-center mb-3">
          <div
            className={`rounded-circle d-inline-flex align-items-center justify-content-center ${styles.icon}`}
          >
            <i className="fas fa-user-graduate"></i>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center fw-bold mb-1">Student Registration</h3>
        <p className="text-center text-muted mb-4">
          Create your student account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className={`${styles.input} ${styles.inputTop}`}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              className={styles.input}
              value={formData.contactNumber}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input}
              value={formData.password}
              onChange={handleChange}
            />

            <select
              name="branchId"
              className={styles.input}
              value={formData.branchId}
              onChange={handleChange}
            >
              <option value="">Select Branch</option>
              {branches.map((branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.enumValue}
                </option>
              ))}
            </select>

            <select
              name="semesterId"
              className={styles.input}
              value={formData.semesterId}
              onChange={handleChange}
            >
              <option value="">Select Semester</option>
              {semesters.map((sem) => (
                <option key={sem.id} value={sem.id}>
                  {sem.enumValue}
                </option>
              ))}
            </select>

            <select
              name="yearId"
              className={`${styles.input} ${styles.inputBottom}`}
              value={formData.yearId}
              onChange={handleChange}
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year.id} value={year.id}>
                  {year.enumValue}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className={`${styles.signupBtn} mt-4`}
            disabled={loading}
          >
            <i className="fas fa-user-plus me-2"></i>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <a
            href="/Login"
            className="fw-semibold text-primary text-decoration-none"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

Signup.noLayout = true;
export default Signup;
