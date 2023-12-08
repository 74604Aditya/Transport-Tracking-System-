// Header.jsx
import React from "react";
import { Alert, Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <Container>
      <Alert variant="success">
        <h6>{props.text}</h6>
      </Alert>
    </Container>
  );
};

export default Header;
