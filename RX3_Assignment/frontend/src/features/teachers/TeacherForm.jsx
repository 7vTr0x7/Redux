import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher, updateTeacher } from "./teachersSlice";
import { useLocation } from "react-router-dom";

const TeacherForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const teachers = useSelector((state) => state.teachers.teachers);

  const location = useLocation();
  const dispatch = useDispatch();

  const data = location.state || {};

  const clickHandler = (e) => {
    e.preventDefault();
    if (name && age && gender && subject) {
      if (data.teacher) {
        const teacher = {
          _id: data.teacher._id,
          name: name,
          age: age,
          gender: gender,
          subject: subject,
        };

        dispatch(updateTeacher({ id: data.teacher._id, teacher }));
      } else {
        const newTeacher = {
          _id: teachers.length + 1,
          name: name,
          age: age,
          gender: gender,
          subject: subject,
        };
        dispatch(addTeacher(newTeacher));
      }
      setAge("");
      setName("");
      setGender("");
      setSubject("");
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (data.teacher) {
      setName(data.teacher?.name);
      setAge(data.teacher?.age);
      setGender(data.teacher?.gender);
      setSubject(data.teacher?.subject);
    }
  }, [data.teacher]);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Add Teacher</h1>
        <div className="col-md-3">
          <form>
            <div className="mt-3">
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                id="age"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mt-3">
              <p className="p-0 m-0">Gender:</p>
              <label htmlFor="male">
                <input
                  type="radio"
                  name="gender"
                  placeholder="Gender"
                  value={"Male"}
                  id="male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                {" Male"}
              </label>
            </div>

            <div className="">
              <label htmlFor="female">
                <input
                  type="radio"
                  name="gender"
                  placeholder="Gender"
                  checked={gender === "Female"}
                  value={"Female"}
                  id="female"
                  onChange={(e) => setGender(e.target.value)}
                />
                {" Female"}{" "}
              </label>
            </div>
            <div className="mt-3">
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-control"
              />
            </div>
            <button
              className="btn btn-primary my-3"
              type="submit"
              onClick={clickHandler}>
              {data.teacher ? "Update Teacher" : "Add Teacher"}
            </button>
          </form>
        </div>
        {submitted && (
          <p>{`${data.teacher ? "Teacher Updated" : "Teacher Added"}`}</p>
        )}
      </main>
    </>
  );
};

export default TeacherForm;
