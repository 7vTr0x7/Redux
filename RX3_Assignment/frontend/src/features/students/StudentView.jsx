import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "./studentsSlice";
import StudentList from "./StudentList";

const StudentView = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div>
      {status === "pending" && <p>{status}</p>}
      {error && <p>Error: {error}</p>}
      <h1>Student View</h1>
      <StudentList students={students} />
    </div>
  );
};

export default StudentView;