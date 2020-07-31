import React, { Component } from "react";
import axios from "axios";

class UserTable extends Component {
  state = { users: [] };
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=25").then((res) => {
      console.log(res.data);
      this.setState({ users: JSON.stringify(res.data.results) });
    });
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
