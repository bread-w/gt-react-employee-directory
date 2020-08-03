import React, { Component } from "react";
import API from "../utils/API";
import UserInfo from "./UserInfo";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";

class UserTable extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    API.getRandomPeople()
      .then((res) => this.setState({ users: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
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
        <h1>Employee Directory</h1>
        {this.state.users.map((user) => (
          <UserInfo
            name={user.name.first}
            email={user.name.email}
            age={user.dob.age}
            phone={user.phone}
            id={user.id.value}
            src={user.picture.thumbnail}
          />
        ))}
      </div>
    );
  }
}

export default UserTable;
