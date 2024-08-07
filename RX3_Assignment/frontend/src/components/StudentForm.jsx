import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addStudentAsync,
  fetchStudents,
  updateStudentAsync,
} from "../features/students/studentsSlice";
import Header from "./Header";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");

  const [attendance, setAttendance] = useState("");
  const [marks, setMarks] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();

  const students = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  const { student } = location.state || {};

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (student) {
      if ((name, age, gender, grade, attendance, marks)) {
        const newStudent = {
          _id: student._id,
          name: name,
          age: Number(age),
          grade: grade,
          gender: gender,
          attendance: Number(attendance),
          marks: Number(marks),
        };
        dispatch(updateStudentAsync({ id: student._id, newStudent }));
      }
    } else {
      if ((name, age, gender, grade)) {
        const newStudent = {
          _id: students.students.length + 1,
          name: name,
          age: Number(age),
          grade: grade,
          gender: gender,
        };

        dispatch(addStudentAsync(newStudent));
      }
    }
    setAge("");
    setName("");
    setGender("");
    setGrade("");
    setAttendance("");
    setMarks("");
    setSubmitted(true);
  };

  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
      setGender(student?.gender);
      setGrade(student.grade);
      if (student.attendance && student.marks) {
        setAttendance(student.attendance);
        setMarks(student.marks);
      }
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="container py-3">
        <h2>Add Student</h2>
        <form>
          <div className="col-md-3">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="pt-3">
              <input
                type="text"
                placeholder="Age"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="pt-3">
              <input
                type="text"
                placeholder="Grade"
                className="form-control"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>
            <div className="pt-3">
              <p className="p-0 m-0">Gender:</p>
              <label htmlFor="Male">
                <input
                  type="radio"
                  name="gender"
                  value={"Male"}
                  id="Male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                {" Male"}
              </label>
              <br />
              <label htmlFor="Female">
                <input
                  type="radio"
                  name="gender"
                  value={"Female"}
                  id="Female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                {" Female"}
              </label>
              {student && (
                <>
                  <div className="pt-3">
                    <input
                      placeholder="Attendance"
                      className="form-control"
                      value={attendance}
                      onChange={(e) => setAttendance(e.target.value)}
                    />
                  </div>
                  <div className="pt-3">
                    <input
                      placeholder="Marks"
                      className="form-control"
                      value={marks}
                      onChange={(e) => setMarks(e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
            <button
              type="submit"
              onClick={submitHandler}
              className={
                student ? "btn btn-primary my-3" : "btn btn-info my-3"
              }>
              {student ? "Update" : "Add"}
            </button>
            <p>
              {submitted &&
                (student
                  ? "Student Details Updated"
                  : "Student Added Successfully")}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
