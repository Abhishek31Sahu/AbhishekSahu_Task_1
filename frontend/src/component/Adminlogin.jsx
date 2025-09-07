import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import { useNavigate } from "react-router-dom";

function Adminlogin() {
  const [info, setInfo] = useState({ email: "", password: "", role: "admin" });
  const [errors, setErrors] = useState();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    let isValid = true;
    let tempErrors = {};

    if (!info.email || !/\S+@\S+\.\S+/.test(info.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!info.password || info.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateInputs()) {
      handleError(errors);

      return;
    }
    console.log(info);
    try {
      const result = await axios.post(
        "http://localhost:5000/api/login",
        info,
        {
          headers: {
            content: "application/json",
          },
        },
        {
          withCredentials: true,
        }
      );
      const { success, message, jwtToken, name, error } = result.data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("role", "admin");
        const timer = setTimeout(() => {
          navigate("/courses");
        }, 3000);
      } else if (error) {
        console.log(error);
        handleError(error);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      console.error(err);
    }
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
      <ToastContainer />
    </Container>
  );
}

export default Adminlogin;
