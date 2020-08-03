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
            <p>
              {props.first} {props.last}
            </p>
          </Col>
          <Col size="md-2">
            <p>{props.email}</p>
          </Col>
          <Col size="md-2">
            <p>{props.phone}</p>
          </Col>
          <Col size="md-2">
            <p>{props.age}</p>
          </Col>
          <Col size="md-2">
            <p>{props.nationality}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserInfo;
