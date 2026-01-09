import AssignmentCard from '@/components/Student/AssignmentCard';
import AssignmentFilterTab from '@/components/Student/AssignmentFilterTab';
import React from 'react'
import AssignmentStatsCard from '../../components/Student/AssignmentStatsCard';
import UpcomingAssignmentCard from '@/components/Student/UpcomingAssignmentCard';

function MyAssignment() {
  return (
    <div className="mx-4 py-4">
      <div>
        <h3 className="fw-bold fs-3 mb-0">My Assignments</h3>
        <p className="fs-6 text-muted">
          View and manage your assignments
        </p>
      </div>

    
      <div className="container-fluid py-3">
        <div className="row g-4">
            <AssignmentFilterTab active='' />
            
            {/* Left */}
            <div className="col-lg-8 col-12">
                <AssignmentCard />
            </div>

            {/* Right */}
            <div className="col-lg-4 col-12">
                <AssignmentStatsCard />
                <UpcomingAssignmentCard />
            </div>

        </div>
      </div>
    </div>
  )
}

export default MyAssignment;