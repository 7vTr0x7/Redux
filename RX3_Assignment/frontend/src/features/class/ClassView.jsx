import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, setFilter, setSortBy } from "../students/studentsSlice";

const ClassView = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const filter = useSelector((state) => {
    return state.students.filter;
  });
  const sortBy = useSelector((state) => {
    return state.students.sortBy;
  });

  const filteredStudents =
    filter !== "All"
      ? filter === "Boys"
        ? students.students.filter((stud) => stud.gender === "Male")
        : students.students.filter((stud) => stud.gender === "Female")
      : students.students;

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const getSorted = (sort) => {
    if (sort === "name") {
      const sort = [...filteredStudents].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return sort;
    } else if (sort === "marks") {
      const sort = [...filteredStudents].sort((a, b) => b.marks - a.marks);
      return sort;
    } else if (sort === "attendance") {
      const sort = [...filteredStudents].sort(
        (a, b) => b.attendance - a.attendance
      );
      return sort;
    }
  };

  const sortedStudents = getSorted(sortBy);

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
            value={filter}
            onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
          </select>
        </div>

        <div className="col-md-2 my-3">
          <label htmlFor="sortBy">Sort By: </label>
          <select
            id="sortBy"
            className="form-select"
            value={sortBy}
            onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="marks">Marks</option>
            <option value="attendance">Attendance</option>
          </select>
        </div>

        <div className="my-3">
          <ul>
            {sortedStudents &&
              sortedStudents.map((student) => (
                <li key={student._id}>{`${student.name} - ${
                  student.gender
                } - Marks: ${student.marks || "Unknown"} - Attendance: ${
                  student.attendance || "Unknown"
                }`}</li>
              ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default ClassView;
