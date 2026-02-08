"use client";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AdminListData, AdminListProps } from "@/types/type";
import { deleteAdmin, getAllAdmins } from "@/services/superAdminService";

function AdminList({ search }: AdminListProps) {
  const router = useRouter();

  // Admin stats
  const [admins, setAdmins] = useState<AdminListData[]>([]);

  // Loading stats
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch admins
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const data = await getAllAdmins(page, limit, search);
        console.log("Admins data:", data);
        
        setAdmins(data.admins);
        setTotalPages(data.totalPages);
      } catch (error: any) {
        console.error("Error fetching admins data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, [page, search]);

  // View admin
  const handleView = (id: number) => {
    router.push(`/SuperAdmin/ViewAdmin/${id}`);
  };

  // Edit admin
  const handleEdit = (id: number) => {
    router.push(`/SuperAdmin/UpdateAdmin/${id}`);
  };

  // Delete admin
  const handleDelete = (id: number) => {
    toast.custom((t) => (
      <div
        className={`bg-white shadow-lg rounded-4 p-4 ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
        style={{ minWidth: "320px" }}
      >
        <h6 className="fw-bold text-danger mb-2">Confirm Delete</h6>
        <p className="mb-3">Are you sure you want to delete this admin?</p>

        <div className="d-flex justify-content-end gap-2">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>

          <button
            className="btn btn-sm btn-danger"
            onClick={async () => {
              // Show loader toast
              const loadingToast = toast.loading("Deleting admin...");
              try {
                const response = await deleteAdmin(id);
                console.log("Admin Deleted: ", response);
                // // Remove admin from list
                // setAdmins((prev) =>
                //   prev.filter((admin) => admin.id !== id)
                // );

                toast.dismiss(loadingToast);
                toast.success("Admin deleted successfully!");
              } catch (error) {
                console.error("Delete admin error:", error);
                toast.dismiss(loadingToast);
                toast.error("Failed to delete admin");
              } finally {
                toast.dismiss(t.id);
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 table-responsive cardAnimation">
      <div className="card-body p-4">
        {loading ? (
          <h5>Loading Admins...</h5>
        ) : (
          <>
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>ADMIN_ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {admins.length > 0 ? (
                  Array.isArray(admins) &&
                  admins.map((admin) => (
                    <tr key={admin.id}>
                      <td>{admin.code}</td>
                      <td>{admin.name}</td>
                      <td>{admin.email}</td>
                      <td>
                        <span
                          className={`badge rounded-pill px-3 ${admin.status.enumValue === "Active" ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"}`}
                        >
                          {admin.status.enumValue}
                        </span>
                      </td>
                      <td style={{ cursor: "pointer" }}>
                        <i
                          className="fas fa-eye text-primary"
                          onClick={() => handleView(admin.id)}
                        ></i>
                        <i
                          className="fas fa-pencil-square text-info mx-3"
                          onClick={() => handleEdit(admin.id)}
                        ></i>
                        <i
                          className="fas fa-trash text-danger"
                          onClick={() => handleDelete(admin.id)}
                        ></i>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center text-muted">
                      No admins found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-outline-secondary"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </button>

              <span>
                Page {page} of {totalPages}
              </span>

              <button
                className="btn btn-outline-secondary"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminList;
