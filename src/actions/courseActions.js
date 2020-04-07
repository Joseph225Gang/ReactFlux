import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import  coursesArray from "../Courses";

export function saveCourse(savedCourse) {
    if(JSON.parse(localStorage.getItem("coursesArray")) == null)
        localStorage.setItem("coursesArray", JSON.stringify(coursesArray));
    return dispatcher.dispatch({
    actionType: actionTypes.UPDATE_COURSE,
    course: savedCourse
  });
}

export function loadCourses() {
    if(JSON.parse(localStorage.getItem("coursesArray")) == null)
        localStorage.setItem("coursesArray", JSON.stringify(coursesArray));
    return dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: JSON.parse(localStorage.getItem("coursesArray"))
    });
}

export function deleteCourse(id) {
      dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: id
    });
}

export function addCourse(newCourse) {
    newCourse.id = JSON.parse(localStorage.getItem("coursesArray")) == null ? 0 : JSON.parse(localStorage.getItem("coursesArray")).length;
    return dispatcher.dispatch({
    actionType: actionTypes.CREATE_COURSE,
    course: newCourse
  });
}