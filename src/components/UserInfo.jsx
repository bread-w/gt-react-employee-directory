import React from "react";
import Col from "./Col";
import Container from "./Container";
import Row from "./Row";


const UserInfo = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-2">
            <img alt={props.name} className="img-fluid" src={props.src} />
          </Col>
          <Col size="md-2">
            <p>Name: {props.name}</p>
          </Col>
          <Col size="md-2">
            <p>Email: {props.email}</p>
          </Col>
          <Col size="md-2">
            <p>Age: {props.age}</p>
          </Col>
          <Col size="md-2">
            <p>Phone: {props.phone}</p>
          </Col>
          <Col size="md-2">
            <p>Nationality: {props.nationality}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserInfo;
