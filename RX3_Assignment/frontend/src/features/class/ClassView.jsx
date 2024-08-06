import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, setFilter } from "../students/studentsSlice";

const ClassView = () => {
  const [filteredStudents, setFilteredStudents] = useState([]);

  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const filter = useSelector((state) => {
    return state.students.filter;
  });
  console.log(students);

  const getFiltered = () => {
    console.log(students);
    if (filter.filter !== "All") {
      const filtered =
        filter.filter === "Boys"
          ? students.students.filter((student) => student.gender === "Male")
          : students.students.filter((student) => student.gender === "Female");

      setFilteredStudents(filtered);
    } else {
      setFilteredStudents(students.students);
    }
  };

  const handleFilterByGender = (e) => {
    dispatch(setFilter(e.target.value));
  };

  useEffect(() => {
    getFiltered();
  }, [filter]);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Class View</h1>
        <div className="col-md-2 my-3">
          <label htmlFor="filterByGender">Filter By Gender: </label>
          <select
            id="filterByGender"
            className="form-select"
            value={filter.filter}
            onChange={handleFilterByGender}>
            <option value="All">All</option>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
          </select>
        </div>

        <div className="col-md-2 my-3">
          <label htmlFor="sortBy">Sort By: </label>
          <select id="sortBy" className="form-select">
            <option value="name">Name</option>
            <option value="marks">Marks</option>
            <option value="attendance">Attendance</option>
          </select>
        </div>

        <div className="my-3">
          <ul>
            {filteredStudents &&
              filteredStudents.map((student) => (
                <li key={student._id}>{student.name}</li>
              ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default ClassView;
