import React from "react";

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {students &&
          students.map((student) => (
            <li key={student._id}>
              {student.name} (Age: {student.age})
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StudentList;
