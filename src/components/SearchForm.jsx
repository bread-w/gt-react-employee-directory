import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.name array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Filter by Employee Name..."
          id="name"
        />
      </div>
    </form>
  );
}

export default SearchForm;