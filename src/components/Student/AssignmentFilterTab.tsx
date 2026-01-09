interface Props{
    active: string;
}

function AssignmentFilterTab({active} : Props) {
  return (
    <div className='mt-4 d-flex flex-wrap gap-2'>
        <button className={`btn px-4 ${ active === "All" ? "btn-primary" : "btn-outline-secondary"}`}>All Assignments</button>
        <button className={`btn px-4 ${ active === "Pending" ? "btn-primary" : "btn-outline-secondary"}`}>Pending</button>
        <button className={`btn px-4 ${ active === "Completed" ? "btn-primary" : "btn-outline-secondary"}`}>Completed</button>
        <button className={`btn px-4 ${ active === "Overdue" ? "btn-primary" : "btn-outline-secondary"}`}>Overdue</button>
        <button className={`btn px-4 ${ active === "Upcoming" ? "btn-primary" : "btn-outline-secondary"}`}>Upcoming</button>
    </div>
  )
}

export default AssignmentFilterTab