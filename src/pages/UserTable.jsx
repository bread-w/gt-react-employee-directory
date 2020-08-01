import React, { Component } from "react";
import API from "../utils/API";

class UserTable extends Component {
  state = { users: [] };
  componentDidMount() {
    API.getRandomPeople()
      .then((res) => this.setState({ users: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    API.getPersonByName(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    );
  }
}

export default UserTable;
