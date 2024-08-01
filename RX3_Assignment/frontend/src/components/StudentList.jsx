import React from "react";
import { Link } from "react-router-dom";

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {students &&
          students.map((student) => (
            <li key={student._id}>
              <Link className="nav-link" to={`/${student._id}`}>
                {student.name} (Age: {student.age})
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StudentList;
