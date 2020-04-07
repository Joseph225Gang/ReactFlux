import React from "react";
import { Link } from "react-router-dom";

function HomePage(){
    return (
        <div className="jumbotron">
            <h1>HomePage</h1>
            <Link to="about" className="btn btn-primary">
                About
            </Link>
            <Link to="courses" className="btn btn-primary">
                Courses
            </Link>
        </div>
    )
}
export default HomePage;