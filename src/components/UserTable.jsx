import React, { Component } from "react";
import API from "../utils/API";
import UserInfo from "./UserInfo";
import SearchForm from "./SearchForm";
// import SearchResults from "./SearchResults";

class UserTable extends Component {
  state = {
    users: [],
    filteredUsers: []
  };

  componentDidMount() {
    API.getRandomPeople()
      .then((res) =>{
        console.log(
            res.data.results
          ) 
          this.setState(
          { users: res.data.results, filteredUsers: res.data.results }
        )
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    // console.log(event.target.value)
    const value = event.target.value;
    console.log(value);
    const filteredUsers = this.state.users.filter(user=>{
      return user.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1
    })
    this.setState({filteredUsers})
  };

  handleFormSubmit = (event) => {
    API.getRandomPeople(this.state.search)
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
        <SearchForm handleInputChange={this.handleInputChange} />
        {this.state.filteredUsers.map((user) => (
          <UserInfo
            key = {user.login.uuid}
            first={user.name.first}
            last={user.name.last}
            email={user.email}
            phone={user.phone}
            age={user.dob.age}
            nationality={user.location.country}
            src={user.picture.thumbnail}
          />
        ))}
      </div>
    );
  }
}

export default UserTable;
