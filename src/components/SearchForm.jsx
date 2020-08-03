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
          placeholder="Type in an Employee name to begin."
          id="name"
        />
      </div>
    </form>
  );
}

export default SearchForm;