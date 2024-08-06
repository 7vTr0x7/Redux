import React from "react";
import { Link } from "react-router-dom";

const TeachersList = ({ teachers }) => {
  return (
    <div>
      <h2>Teachers List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            <Link className="nav-link" to={`/teacherDetails/${teacher._id}`}>
              {teacher.name} - subject: {teacher.subject}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersList;
