import React from "react";

const TeachersList = ({ teachers }) => {
  return (
    <div>
      <h2>Teachers List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            {teacher.name} - subject: {teacher.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersList;
