import React, { Component } from "react";
import API from "../utils/API";
import UserInfo from "./UserInfo";
import SearchForm from "./SearchForm";

class UserTable extends Component {
  state = {
    users: [],
    filteredUsers: [],
    sort: false,
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

  handleSortChange = () => {
    this.setState({ sort: !this.state.sort });
    let sortByName;
    if (this.state.sort) {
      sortByName = this.state.users.sort((userA, userB) => {
        if (userA.name.first > userB.name.first) {
          return 1;
        } else if (userA.name.first < userB.name.first) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      sortByName = this.state.users.sort((userA, userB) => {
        if (userA.name.first < userB.name.first) {
          return 1;
        } else if (userA.name.first > userB.name.first) {
          return -1;
        } else {
          return 0;
        }
      });
    }
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
              <p onClick={this.handleSortChange}>
                Name
                {!this.state.sort && <span> &#8963;</span>}
                {this.state.sort && <span> &#8964;</span>}
              </p>
            </div>
            <div className="col-sm-2">
              <p>Email</p>
            </div>
            <div className="col-sm-2">
              <p>Phone</p>
            </div>
            <div className="col-sm-2">
              <p>Age</p>
            </div>
            <div className="col-sm-2">
              <p>Nationality</p>
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
