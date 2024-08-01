import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudentAsync,
  fetchStudents,
} from "../features/students/studentsSlice";

const StudentDetails = () => {
  const [deleted, setDeleted] = useState(false);
  const dispatch = useDispatch();
  const id = useParams();

  const students = useSelector((state) => state.students);

  const student = students.students.find((stud) => stud._id == id.studentId);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  const clickHandler = () => {
    dispatch(deleteStudentAsync(student._id));
    setDeleted(true);
  };

  return (
    <>
      <Header />
      <div className="container py-3">
        {deleted ? (
          <h2>Student Details Deleted successfully</h2>
        ) : (
          <>
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
              <Link to="/studentForm" className="nav-link" state={{ student }}>
                Edit Details
              </Link>
            </button>
            <button className="btn btn-danger mx-3" onClick={clickHandler}>
              Delete
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default StudentDetails;
