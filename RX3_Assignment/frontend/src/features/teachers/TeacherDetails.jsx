import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { deleteTeacher } from "./teachersSlice";

const TeacherDetails = () => {
  const [deleted, setDeleted] = useState(false);
  const dispatch = useDispatch();

  const id = useParams();
  const teachers = useSelector((state) => state.teachers.teachers);

  const teacher = teachers.find((teacher) => teacher._id == id.teacherId);

  const deleteHandler = () => {
    dispatch(deleteTeacher(teacher._id));
    setDeleted(true);
  };

  return (
    <>
      <Header />
      <main className="py-4 container">
        {deleted ? (
          <h1>Teacher Details Deleted</h1>
        ) : (
          <>
            <h1>Teacher Details</h1>
            <p>Name: {teacher?.name}</p>
            <p>Age: {teacher?.age}</p>
            <p>gender: {teacher?.gender}</p>
            <p>Subject: {teacher?.subject}</p>
            <div>
              <button className="btn btn-warning ">Edit Details</button>
              <button className="btn btn-danger mx-3" onClick={deleteHandler}>
                Delete
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default TeacherDetails;
