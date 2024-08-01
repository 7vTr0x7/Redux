import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "./studentsSlice";
import StudentList from "../../components/StudentList";
import { Link } from "react-router-dom";

const StudentView = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div className="container py-3">
      {status === "pending" && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <h1>Student View</h1>
      <button className="btn btn-warning my-3">
        <Link to="/studentForm" className="nav-link">
          Add Student
        </Link>
      </button>
      <StudentList students={students.students} />
    </div>
  );
};

export default StudentView;
