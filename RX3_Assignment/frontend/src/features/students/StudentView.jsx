import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "./studentsSlice";
import StudentList from "./StudentList";

const StudentView = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  });

  return (
    <div>
      <h1>Student View</h1>
      <StudentList students={students} />
    </div>
  );
};

export default StudentView;
