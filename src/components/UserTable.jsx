import React, { Component } from "react";
import API from "../utils/API"

class UserTable extends Component {
  state = { users: [] };
  componentDidMount() {
    API.getRandomPerson()
    .then(res => this.setState({ users: JSON.stringify(res.data.results) }))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <p>Hello World!</p>
        <code>{this.state.users}</code>
      </div>
    );
  }
}

export default UserTable;
