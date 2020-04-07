import React from "react";
import TextInput from "./TextInput";
import PropTypes from "prop-types";

function CourseForm(props){
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="author"
            onChange={props.onChange}
            value={props.course.author || ""}
            className="form-control"
          >
            <option value=""></option>
            <option value="Joseph">Joseph</option>
            <option value="Michael">Michael</option>
          </select>
        </div>
        {props.errors.author && (
          <div className="alert alert-danger">{props.errors.author}</div>
        )}
      </div>

            <TextInput
                id="category"
                label="Category"
                name="category"
                onChange={props.onChange}
                value={props.course.category}
                error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    )
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };

export default CourseForm;
