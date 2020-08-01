import React, { Component } from "react";
import API from "../utils/API";
// import Alert from "../components/Alert";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";

class UserTable extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    API.getRandomPeople()
      .then(
        (res) =>
          console.log(
            res.data.results
          ) /* this.setState({ users: res.data.results }) */
      )
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
        <Container>
          <h1>Hello World!</h1>
          <Row>
            <Col size="md-2">{this.state.users}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserTable;
