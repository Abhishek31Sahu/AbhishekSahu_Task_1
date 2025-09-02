import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Adminlogin() {
  const [info, setInfo] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center "
    >
      <Card
        style={{ width: "30rem", backgroundColor: "#f8f9fa" }}
        className="p-4 shadow-sm "
      >
        <Card.Title className="text-center mb-3">Admin Login</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={info.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={info.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Adminlogin;
