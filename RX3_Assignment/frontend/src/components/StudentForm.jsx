import React, { useState } from "react";
import Header from "./Header";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newStudent = {
      name: name,
      age: age,
      grade: grade,
      gender: gender,
    };
  };

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
              <label>Gender: </label>
              <br />
              <label htmlFor="Male">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  id="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                {" Male"}
              </label>
              <br />
              <label htmlFor="Female">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  id="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
                {" Female"}
              </label>
            </div>
            <button
              type="submit"
              onClick={submitHandler}
              className="btn btn-info my-3">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
