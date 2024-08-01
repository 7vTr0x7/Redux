import React, { useEffect } from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../features/students/studentsSlice";

const StudentDetails = () => {
  const dispatch = useDispatch();
  const id = useParams();

  const students = useSelector((state) => state.students);

  const student = students.students.find((stud) => stud._id == id.studentId);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <>
      <Header />
      <div className="container py-3">
        <h2>Student Details</h2>
        {student && (
          <>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <p>Attendance: {student.attendance}</p>
            <p>Marks: {student.marks}</p>
          </>
        )}
        <button className="btn btn-warning">
          <Link to="/studentForm" state={{ student }}>
            Edit Details
          </Link>
        </button>
        <button className="btn btn-warning">Delete</button>
      </div>
    </>
  );
};

export default StudentDetails;
