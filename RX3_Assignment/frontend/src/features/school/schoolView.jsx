import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../students/studentsSlice";
import { setTopStudent, updateSchoolStats } from "./schoolSlice";
import Header from "../../components/Header";

const SchoolView = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  const stats = useSelector((state) => state.school.stats);
  const teachers = useSelector((state) => state.teachers.teachers);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  useEffect(() => {
    const totalStudents = students.students.length;
    const totalAttendance = students.students.reduce(
      (acc, curr) => acc + (curr.attendance || 0),
      0
    );
    const averageAttendance = totalAttendance / totalStudents;
    const totalMarks = students.students.reduce(
      (acc, curr) => acc + (curr.marks || 0),
      0
    );
    const averageMarks = totalMarks / totalStudents;
    const topStudent = students.students.reduce((acc, curr) =>
      acc.mark > curr.marks ? acc : curr
    );

    const totalTeachers = teachers.length;
    const subjects = teachers.map((teacher) => teacher.subject);

    dispatch(
      updateSchoolStats({
        totalStudents,
        averageAttendance,
        averageMarks,
        topStudent,
        totalTeachers,
        subjects,
      })
    );

    dispatch(setTopStudent(topStudent));
  }, []);

  console.log(stats);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>School View</h1>
        <h2>Students</h2>
        <p>Total Students: {stats.totalStudents}</p>
        <p>Average Attendance: {stats.averageAttendance}</p>
        <p>Average Marks: {stats.averageMarks}</p>
        <p>Top Student: {stats.topStudent?.name}</p>
        <h2>Teachers</h2>
        <p>Total Teachers: {stats?.totalTeachers}</p>
        <p>Subjects: {stats?.subjects?.join(", ")}</p>
      </main>
    </>
  );
};

export default SchoolView;
