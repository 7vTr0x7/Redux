import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import TeachersList from "../../components/TeachersList";
import { Link } from "react-router-dom";

const TeachersView = () => {
  const teachers = useSelector((state) => state.teachers?.teachers);
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Teacher View </h1>
        <button className="btn btn-warning my-3">
          <Link to="/" className="nav-link">
            Add Student
          </Link>
        </button>
        <TeachersList teachers={teachers} />
      </main>
    </>
  );
};

export default TeachersView;
