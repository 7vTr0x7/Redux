import React, { useState } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "./teachersSlice";

const TeacherForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const teachers = useSelector((state) => state.teachers.teachers);

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    if (name && age && gender && subject) {
      const newTeacher = {
        _id: teachers.length + 1,
        name: name,
        age: age,
        gender: gender,
        subject: subject,
      };

      dispatch(addTeacher(newTeacher));
      setAge("");
      setName("");
      setGender("");
      setSubject("");
      setSubmitted(true);
    }
  };

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
              Add Teacher
            </button>
          </form>
        </div>
        {submitted && <p>Teacher Added</p>}
      </main>
    </>
  );
};

export default TeacherForm;
