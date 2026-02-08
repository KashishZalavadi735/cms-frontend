"use client";

import { AssignmentFilterTabProps } from "@/types/type";

const tabs = ["All", "Pending", "In Process", "Completed"];

function AssignmentFilterTab({ active, setActive }: AssignmentFilterTabProps) {

  return (
    <div className="mt-4 d-flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`btn px-4 ${active === tab ? "btn-primary" : "btn-outline-secondary"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default AssignmentFilterTab;
