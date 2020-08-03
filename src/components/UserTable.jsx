import React, { Component } from "react";
import API from "../utils/API";
import UserInfo from "./UserInfo";
import SearchForm from "./SearchForm";
// import SearchResults from "./SearchResults";

class UserTable extends Component {
  state = {
    users: [],
    filteredUsers: [],
  };

  componentDidMount() {
    API.getRandomPeople()
      .then((res) => {
        console.log(res.data.results);
        this.setState({
          users: res.data.results,
          filteredUsers: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    // console.log(event.target.value)
    const value = event.target.value;
    console.log(value);
    const filteredUsers = this.state.users.filter((user) => {
      return user.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers });
  };

  handleSortChange = (keyA, keyB) => {
    console.log("Clicked");
    const sortByName = this.state.users.sort((userA, userB) => {
      if (userA[keyA][keyB] > userB[keyA][keyB]) {
        return 1;
      } else if (userA[keyA][keyB] < userB[keyA][keyB]) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log(sortByName);
    this.setState({ users: sortByName });
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
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <SearchForm handleInputChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>Headshot</p>
            </div>
            <div className="col-sm-2">
              <p onClick={() => this.handleSortChange("name", "first")}>Name</p>
            </div>
            <div className="col-sm-2">
              <p>Email</p>
            </div>
            <div className="col-sm-2">
              <p>Phone</p>
            </div>
            <div className="col-sm-2">
              <p onClick={() => this.handleSortChange("dob", "age")}>Age</p>
            </div>
            <div className="col-sm-2">
              <p onClick={() => this.handleSortChange("location", "country")}>Nationality</p>
            </div>
          </div>
        </div>
        {this.state.filteredUsers.map((user) => (
          <UserInfo
            key={user.login.uuid}
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
