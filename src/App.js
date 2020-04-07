import React from 'react';
import './App.css';
import HomePage from "./HomePage";
import About from "./About";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import CoursePage from "./CoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={CoursePage} />       
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default App;
