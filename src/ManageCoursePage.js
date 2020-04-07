import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import courseStore from "./stores/courseStore";
import * as courseActions from "./actions/courseActions";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    author: "",
    category: ""
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const id = props.match.params.slug; 
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (id) {
      setCourse(courseStore.getCourseById(id));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!course.author) _errors.author = "Author's name is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    if(props.match.params.slug)
      courseActions.saveCourse(course);
    else
      courseActions.addCourse(course);
    props.history.push("/courses");
    toast.success("Course saved.");
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
