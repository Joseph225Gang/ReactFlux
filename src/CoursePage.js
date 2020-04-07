import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse, addCourse } from "./actions/courseActions";
import courseStore from "./stores/courseStore";

function CoursePage() {

  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courses.length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
  }, [courses.length]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Author</th>
          <th>Category</th>
          <th>
          <Link to={"/course/"}><h2>Add</h2></Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.id}>{course.id + 1}</Link>
              </td>
              <td>{course.author}</td>
              <td>{course.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    deleteCourse(course.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
  }

  export default CoursePage;